import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const allCategories = [
  { name: 'Электроника', icon: 'Laptop', count: 1243 },
  { name: 'Одежда', icon: 'Shirt', count: 892 },
  { name: 'Дом', icon: 'Home', count: 654 },
  { name: 'Красота', icon: 'Sparkles', count: 421 },
  { name: 'Спорт', icon: 'Dumbbell', count: 378 },
];

const allProducts = [
  {
    id: 1,
    name: 'Смартфон Galaxy X Pro',
    category: 'Электроника',
    rating: 4.8,
    reviews: 1234,
    price: 89990,
    image: '📱',
  },
  {
    id: 2,
    name: 'Наушники SoundPro 3000',
    category: 'Электроника',
    rating: 4.6,
    reviews: 892,
    price: 12990,
    image: '🎧',
  },
  {
    id: 3,
    name: 'Умные часы FitTrack Pro',
    category: 'Электроника',
    rating: 4.9,
    reviews: 2156,
    price: 19990,
    image: '⌚',
  },
  {
    id: 4,
    name: 'Ноутбук UltraBook Pro',
    category: 'Электроника',
    rating: 4.7,
    reviews: 543,
    price: 129990,
    image: '💻',
  },
  {
    id: 5,
    name: 'Кофеварка Espresso Max',
    category: 'Дом',
    rating: 4.7,
    reviews: 321,
    price: 8990,
    image: '☕',
  },
  {
    id: 6,
    name: 'Робот-пылесос CleanBot',
    category: 'Дом',
    rating: 4.8,
    reviews: 678,
    price: 34990,
    image: '🤖',
  },
  {
    id: 7,
    name: 'Куртка зимняя Arctic',
    category: 'Одежда',
    rating: 4.5,
    reviews: 234,
    price: 15990,
    image: '🧥',
  },
  {
    id: 8,
    name: 'Кроссовки RunMax Pro',
    category: 'Спорт',
    rating: 4.6,
    reviews: 456,
    price: 7990,
    image: '👟',
  },
  {
    id: 9,
    name: 'Электробритва SmoothCut',
    category: 'Красота',
    rating: 4.4,
    reviews: 289,
    price: 5990,
    image: '🪒',
  },
  {
    id: 10,
    name: 'Планшет TabletPro 11',
    category: 'Электроника',
    rating: 4.8,
    reviews: 891,
    price: 45990,
    image: '📱',
  },
  {
    id: 11,
    name: 'Фен для волос TurboAir',
    category: 'Красота',
    rating: 4.3,
    reviews: 167,
    price: 3990,
    image: '💨',
  },
  {
    id: 12,
    name: 'Гантели набор 20кг',
    category: 'Спорт',
    rating: 4.7,
    reviews: 345,
    price: 4990,
    image: '🏋️',
  },
];

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [minReviews, setMinReviews] = useState(0);
  const [sortBy, setSortBy] = useState('rating');

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesReviews = product.reviews >= minReviews;
      return matchesSearch && matchesCategory && matchesPrice && matchesReviews;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 150000]);
    setMinReviews(0);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ReviewHub
              </h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/">
                <Button variant="ghost">Главная</Button>
              </Link>
              <Button variant="default">Каталог</Button>
              <Button variant="ghost">Топ-100</Button>
              <Button variant="ghost">Блог</Button>
              <Button variant="ghost">О нас</Button>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Каталог товаров</h2>
            <p className="text-muted-foreground">
              Найдено товаров: {filteredProducts.length} из {allProducts.length}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="Filter" />
                      Фильтры
                    </span>
                    {(selectedCategories.length > 0 ||
                      priceRange[0] > 0 ||
                      priceRange[1] < 150000 ||
                      minReviews > 0) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-xs"
                      >
                        Сбросить
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Категории</label>
                    <div className="space-y-3">
                      {allCategories.map((category) => (
                        <div key={category.name} className="flex items-center gap-3">
                          <Checkbox
                            id={category.name}
                            checked={selectedCategories.includes(category.name)}
                            onCheckedChange={() => toggleCategory(category.name)}
                          />
                          <label
                            htmlFor={category.name}
                            className="flex items-center gap-2 cursor-pointer flex-1"
                          >
                            <Icon name={category.icon as any} size={16} />
                            <span className="text-sm">{category.name}</span>
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {category.count}
                            </Badge>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                    </label>
                    <Slider
                      min={0}
                      max={150000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex gap-2 mt-4">
                      <Input
                        type="number"
                        placeholder="От"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="text-xs"
                      />
                      <Input
                        type="number"
                        placeholder="До"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">Рейтинг</label>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <Button
                          key={rating}
                          variant="outline"
                          className="w-full justify-start h-auto py-2"
                          size="sm"
                        >
                          <div className="flex items-center gap-2">
                            {[...Array(rating)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className="fill-amber-400 text-amber-400"
                              />
                            ))}
                            <span className="text-xs">и выше</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Минимум отзывов: {minReviews}
                    </label>
                    <Slider
                      min={0}
                      max={2000}
                      step={100}
                      value={[minReviews]}
                      onValueChange={(val) => setMinReviews(val[0])}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>0</span>
                      <span>2000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent text-base">
                    <Icon name="Sparkles" />
                    Совет дня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Товары с рейтингом выше 4.5 и более 500 отзывов — самый надёжный выбор!
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Icon
                        name="Search"
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        placeholder="Поиск товаров..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">По рейтингу</SelectItem>
                        <SelectItem value="reviews">По отзывам</SelectItem>
                        <SelectItem value="price-asc">Цена: дешевле</SelectItem>
                        <SelectItem value="price-desc">Цена: дороже</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {filteredProducts.length === 0 ? (
                <Card className="py-12">
                  <CardContent className="text-center">
                    <Icon name="PackageX" size={64} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ничего не найдено</h3>
                    <p className="text-muted-foreground mb-4">
                      Попробуйте изменить параметры фильтрации
                    </p>
                    <Button onClick={clearFilters} variant="outline">
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="hover:shadow-xl transition-all border-2 hover:border-primary/50 group cursor-pointer"
                    >
                      <CardHeader>
                        <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-6xl mb-4">
                          {product.image}
                        </div>
                        <Badge variant="outline" className="w-fit mb-2 text-xs">
                          {product.category}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className={
                                  i < Math.floor(product.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-gray-300'
                                }
                              />
                            ))}
                          </div>
                          <span className="font-bold">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({product.reviews})
                          </span>
                        </div>

                        <Progress value={(product.rating / 5) * 100} className="h-2" />

                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">Цена</div>
                            <div className="text-2xl font-bold text-primary">
                              {product.price.toLocaleString()} ₽
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-secondary"
                          >
                            <Icon name="Eye" size={16} className="mr-1" />
                            Смотреть
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
