import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function LeasingCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(20);
  const [leasingTerm, setLeasingTerm] = useState(36);

  const calculateMonthlyPayment = () => {
    const annualRate = 0.12;
    const monthlyRate = annualRate / 12;
    const initialAmount = (vehiclePrice * initialPayment) / 100;
    const loanAmount = vehiclePrice - initialAmount;
    
    const monthlyPayment = 
      loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, leasingTerm)) / 
      (Math.pow(1 + monthlyRate, leasingTerm) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const initialAmount = (vehiclePrice * initialPayment) / 100;
  const totalAmount = monthlyPayment * leasingTerm + initialAmount;
  const overpayment = totalAmount - vehiclePrice;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(Math.round(num));
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Calculator" size={24} className="text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Калькулятор лизинга</CardTitle>
            <CardDescription>Рассчитайте ежемесячный платеж</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-8">
          <div>
            <Label htmlFor="price" className="text-base font-semibold flex items-center gap-2 mb-3">
              <Icon name="DollarSign" size={18} className="text-primary" />
              Стоимость техники
            </Label>
            <Input
              id="price"
              type="number"
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(Number(e.target.value))}
              className="text-lg h-12"
            />
            <p className="text-sm text-muted-foreground mt-2">
              {formatNumber(vehiclePrice)} ₽
            </p>
          </div>

          <div>
            <Label htmlFor="initial" className="text-base font-semibold flex items-center gap-2 mb-3">
              <Icon name="Percent" size={18} className="text-primary" />
              Первоначальный взнос: <span className="text-primary">{initialPayment}%</span>
            </Label>
            <Slider
              id="initial"
              value={[initialPayment]}
              onValueChange={(value) => setInitialPayment(value[0])}
              min={10}
              max={50}
              step={5}
              className="mb-3"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>10%</span>
              <span className="font-semibold text-foreground">{formatNumber(initialAmount)} ₽</span>
              <span>50%</span>
            </div>
          </div>

          <div>
            <Label htmlFor="term" className="text-base font-semibold flex items-center gap-2 mb-3">
              <Icon name="Calendar" size={18} className="text-primary" />
              Срок лизинга: <span className="text-primary">{leasingTerm} мес.</span>
            </Label>
            <Slider
              id="term"
              value={[leasingTerm]}
              onValueChange={(value) => setLeasingTerm(value[0])}
              min={12}
              max={60}
              step={6}
              className="mb-3"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>12 мес.</span>
              <span className="font-semibold text-foreground">{(leasingTerm / 12).toFixed(1)} года</span>
              <span>60 мес.</span>
            </div>
          </div>

          <div className="pt-6 border-t border-border space-y-4">
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Ежемесячный платеж:</span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {formatNumber(monthlyPayment)} ₽
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    в месяц
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Переплата:</span>
                </div>
                <div className="text-xl font-semibold">{formatNumber(overpayment)} ₽</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Wallet" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Итого:</span>
                </div>
                <div className="text-xl font-semibold">{formatNumber(totalAmount)} ₽</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">Примерный расчет</p>
                <p>Расчет выполнен по ставке 12% годовых. Точные условия уточняйте у менеджера.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
