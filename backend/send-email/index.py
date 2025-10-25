'''
Business: Send contact form emails via Yandex SMTP
Args: event with httpMethod, body containing name, phone, email, message
Returns: HTTP response with success/error status
'''

import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    message = body_data.get('message', '')
    
    # Validate required fields
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }
    
    # Get SMTP credentials from environment
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP не настроен'})
        }
    
    # Compose email
    sender_email = 'zentr06@yandex.ru'
    recipient_email = 'zentr06@yandex.ru'
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {name}'
    msg['From'] = sender_email
    msg['To'] = recipient_email
    
    # Create email body
    text_content = f'''
Новая заявка с сайта КоммерТех

Имя: {name}
Телефон: {phone}
Email: {email if email else 'не указан'}

Сообщение:
{message if message else 'отсутствует'}
'''
    
    html_content = f'''
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2563eb;">Новая заявка с сайта КоммерТех</h2>
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px;">Имя:</td>
            <td style="padding: 8px;">{name}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
            <td style="padding: 8px; font-weight: bold;">Телефон:</td>
            <td style="padding: 8px;"><a href="tel:{phone}">{phone}</a></td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">{f'<a href="mailto:{email}">{email}</a>' if email else 'не указан'}</td>
        </tr>
    </table>
    <div style="margin-top: 20px;">
        <p style="font-weight: bold;">Сообщение:</p>
        <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb;">
            {message if message else '<em>отсутствует</em>'}
        </p>
    </div>
</body>
</html>
'''
    
    part1 = MIMEText(text_content, 'plain', 'utf-8')
    part2 = MIMEText(html_content, 'html', 'utf-8')
    
    msg.attach(part1)
    msg.attach(part2)
    
    # Send email via Yandex SMTP
    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(sender_email, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }
