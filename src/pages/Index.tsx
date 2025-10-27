import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const categories = [
  { name: 'Электроника', icon: 'Laptop', count: 1243 },
  { name: 'Одежда', icon: 'Shirt', count: 892 },
  { name: 'Дом', icon: 'Home', count: 654 },
  { name: 'Красота', icon: 'Sparkles', count: 421 },
  { name: 'Спорт', icon: 'Dumbbell', count: 378 },
];

const products = [
  {
    id: 1,
    name: 'Смартфон Galaxy X Pro',
    category: 'Электроника',
    rating: 4.8,
    reviews: 1234,
    price: '89 990 ₽',
    trend: 'up',
    ratings: { 5: 75, 4: 15, 3: 6, 2: 2, 1: 2 },
    topReview: 'Отличная камера и батарея держит 2 дня!',
    reviewAuthor: 'Алексей М.',
  },
  {
    id: 2,
    name: 'Наушники SoundPro 3000',
    category: 'Электроника',
    rating: 4.6,
    reviews: 892,
    price: '12 990 ₽',
    trend: 'up',
    ratings: { 5: 68, 4: 20, 3: 8, 2: 3, 1: 1 },
    topReview: 'Шумоподавление на высоте, удобные',
    reviewAuthor: 'Мария К.',
  },
  {
    id: 3,
    name: 'Умные часы FitTrack Pro',
    category: 'Электроника',
    rating: 4.9,
    reviews: 2156,
    price: '19 990 ₽',
    trend: 'up',
    ratings: { 5: 85, 4: 10, 3: 3, 2: 1, 1: 1 },
    topReview: 'Лучшие часы для спорта!',
    reviewAuthor: 'Дмитрий П.',
  },
];

const trendingProducts = [
  { name: 'Ноутбук UltraBook', rating: 4.9, reviews: 543 },
  { name: 'Кофеварка Espresso Max', rating: 4.7, reviews: 321 },
  { name: 'Робот-пылесос CleanBot', rating: 4.8, reviews: 678 },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ReviewHub
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="ghost">Главная</Button>
              <Button variant="ghost">Каталог</Button>
              <Button variant="ghost">Топ-100</Button>
              <Button variant="ghost">Блог</Button>
              <Button variant="ghost">О нас</Button>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Plus" size={18} className="mr-2" />
              Добавить отзыв
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
              🔥 Топовая платформа отзывов 2024
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Найди лучший товар
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                по честным отзывам
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 50 000 товаров с проверенными отзывами от реальных покупателей
            </p>

            <div className="flex gap-3 max-w-2xl mx-auto mt-8">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 focus:border-primary"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary to-secondary">
                Найти
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={selectedCategory === cat.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={cat.icon as any} size={18} />
                  {cat.name}
                  <Badge variant="secondary" className="ml-1">
                    {cat.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">156 892</CardTitle>
                <CardDescription>Активных пользователей</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-2">
                  <Icon name="MessageSquare" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-3xl font-bold">523 421</CardTitle>
                <CardDescription>Проверенных отзывов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-2">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold">+2 341</CardTitle>
                <CardDescription>Новых отзывов сегодня</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Топ товары недели</h3>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="new">Новые</TabsTrigger>
                    <TabsTrigger value="trending">Тренды</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {products.map((product, idx) => (
                <Card
                  key={product.id}
                  className="hover:shadow-2xl transition-all border-2 hover:border-primary/50 overflow-hidden group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                          {product.trend === 'up' && (
                            <Badge className="bg-accent/10 text-accent border-accent/20">
                              <Icon name="TrendingUp" size={12} className="mr-1" />
                              Растёт
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={18}
                                className={
                                  i < Math.floor(product.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-gray-300'
                                }
                              />
                            ))}
                          </div>
                          <span className="text-2xl font-bold text-primary">{product.rating}</span>
                          <span className="text-muted-foreground">
                            ({product.reviews.toLocaleString()} отзывов)
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{product.price}</div>
                        <Button size="sm" className="mt-2 bg-gradient-to-r from-primary to-secondary">
                          Сравнить
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold mb-3">Распределение оценок</div>
                      {Object.entries(product.ratings)
                        .reverse()
                        .map(([star, percent]) => (
                          <div key={star} className="flex items-center gap-3">
                            <div className="flex items-center gap-1 w-16">
                              <span className="text-sm font-medium">{star}</span>
                              <Icon name="Star" size={14} className="fill-amber-400 text-amber-400" />
                            </div>
                            <Progress value={percent} className="flex-1 h-2" />
                            <span className="text-sm text-muted-foreground w-12 text-right">
                              {percent}%
                            </span>
                          </div>
                        ))}
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                            {product.reviewAuthor.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold text-sm mb-1">{product.reviewAuthor}</div>
                          <p className="text-muted-foreground italic">"{product.topReview}"</p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              <Icon name="ThumbsUp" size={14} className="mr-1" />
                              Полезно (234)
                            </Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              <Icon name="MessageCircle" size={14} className="mr-1" />
                              Ответить
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" size={18} className="mr-2" />
                        Все отзывы
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        Где купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" className="text-accent" />
                    Быстрорастущие
                  </CardTitle>
                  <CardDescription>Самые обсуждаемые товары за 24 часа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trendingProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{product.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={12} className="fill-amber-400 text-amber-400" />
                            <span>{product.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{product.reviews} отзывов</span>
                        </div>
                      </div>
                      <Icon name="TrendingUp" className="text-accent" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Filter" />
                    Фильтры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Рейтинг</label>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <Button key={rating} variant="outline" className="w-full justify-start">
                          <div className="flex items-center gap-2">
                            {[...Array(rating)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className="fill-amber-400 text-amber-400"
                              />
                            ))}
                            <span>и выше</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Цена</label>
                    <div className="flex gap-2">
                      <Input placeholder="От" type="number" />
                      <Input placeholder="До" type="number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество отзывов</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                      <option>Любое</option>
                      <option>Более 100</option>
                      <option>Более 500</option>
                      <option>Более 1000</option>
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    Применить фильтры
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Icon name="Gift" />
                    Промо
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Оставь 5 отзывов и получи шанс выиграть смартфон!
                  </p>
                  <Button className="w-full bg-gradient-to-r from-accent to-accent/80">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ReviewHub
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Честные отзывы от реальных покупателей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О проекте</li>
                <li>Команда</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как оставить отзыв</li>
                <li>Правила модерации</li>
                <li>FAQ</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ReviewHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
