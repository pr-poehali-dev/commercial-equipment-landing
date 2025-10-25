import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import LeasingCalculator from '@/components/LeasingCalculator';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const vehicles = [
    {
      title: 'Тягачи',
      description: 'Мощные седельные тягачи для дальних перевозок',
      image: 'https://cdn.poehali.dev/projects/3c502107-1d2a-43d0-ac1e-be472e1700c8/files/a771b7e5-c09a-4b78-b7c8-71d6ee83972e.jpg',
      features: ['До 500 л.с.', 'Евро-5/6', 'Автономный отопитель']
    },
    {
      title: 'Рефрижераторы',
      description: 'Современные холодильные установки',
      image: 'https://cdn.poehali.dev/projects/3c502107-1d2a-43d0-ac1e-be472e1700c8/files/3cbe7577-16bc-4ca4-8398-8b58601f8a1b.jpg',
      features: ['Температура -25°C', 'Мультитемпературные зоны', 'GPS-мониторинг']
    },
    {
      title: 'Коммунальная техника',
      description: 'Специализированные машины для городских служб',
      image: 'https://cdn.poehali.dev/projects/3c502107-1d2a-43d0-ac1e-be472e1700c8/files/9835debb-467a-490f-832d-bd4209855349.jpg',
      features: ['Высокая надежность', 'Круглогодичная эксплуатация', 'Сервисная поддержка']
    },
    {
      title: 'Грузовики',
      description: 'Универсальные грузовые автомобили',
      image: 'https://cdn.poehali.dev/projects/3c502107-1d2a-43d0-ac1e-be472e1700c8/files/a771b7e5-c09a-4b78-b7c8-71d6ee83972e.jpg',
      features: ['Грузоподъемность до 20 т', 'Различные конфигурации', 'Экономичность']
    }
  ];

  const advantages = [
    {
      icon: 'CreditCard',
      title: 'Лизинг и рассрочка',
      description: 'Гибкие программы финансирования от 6 до 60 месяцев с первоначальным взносом от 10%'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия производителя и расширенные программы сервисного обслуживания'
    },
    {
      icon: 'Wrench',
      title: 'Сервисная поддержка',
      description: 'Собственные сервисные центры и мобильные бригады для оперативного ремонта'
    },
    {
      icon: 'TrendingUp',
      title: 'Trade-in',
      description: 'Выгодный обмен вашей старой техники на новую с максимальной оценкой'
    }
  ];

  const services = [
    {
      icon: 'Truck',
      title: 'Продажа новой техники',
      description: 'Полный каталог коммерческой техники ведущих мировых производителей'
    },
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Плановое ТО, диагностика и ремонт любой сложности'
    },
    {
      icon: 'FileText',
      title: 'Оформление документов',
      description: 'Помощь в регистрации, страховании и получении всех необходимых разрешений'
    },
    {
      icon: 'Users',
      title: 'Обучение персонала',
      description: 'Тренинги по эксплуатации и обслуживанию техники для ваших специалистов'
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      company: 'ООО "Логистик Транс"',
      text: 'Приобрели 5 тягачей в лизинг. Отличные условия, профессиональная команда. Техника работает без нареканий уже 2 года.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      company: 'ИП Сидорова М.А.',
      text: 'Купила рефрижератор для своего бизнеса. Помогли с выбором, оформили все документы быстро. Очень довольна!',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      company: 'Комбинат ЖКХ',
      text: 'Закупили коммунальную технику. Качество на высоте, сервисная поддержка работает круглосуточно. Рекомендую!',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">КоммерТех</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contacts">Заказать звонок</a>
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-primary text-white border-0">Официальный дилер</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Коммерческая техника для вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Продажа, лизинг и сервис грузовой техники. Выгодные программы финансирования от 10% первого взноса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#catalog">Посмотреть каталог</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-white" asChild>
                <a href="#calculator">Рассчитать лизинг</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Калькулятор лизинга</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте предварительную стоимость лизинга для вашей техники
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <LeasingCalculator />
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Каталог техники</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор коммерческой техники для любых задач вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vehicle.title}</CardTitle>
                  <CardDescription>{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему тысячи компаний выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл обслуживания коммерческой техники
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-r from-secondary to-secondary/95 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-white/90">
                Оставьте заявку и получите индивидуальное предложение по лизингу
              </p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Интересующая техника или вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="bg-white"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <Icon name="Phone" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-white/80">+7 (495) 123-45-67</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Icon name="Mail" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-white/80">info@kommertech.ru</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Icon name="MapPin" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-white/80">Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Truck" size={24} />
            <span className="text-xl font-bold">КоммерТех</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 КоммерТех. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}