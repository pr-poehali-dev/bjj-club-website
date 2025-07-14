import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <Icon name="Activity" size={80} className="mx-auto mb-6 text-red-300" />
          </div>
          <h1 className="text-7xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Oswald, sans-serif' }}>
            JIU-JITSU CLUB
          </h1>
          <p className="text-2xl mb-8 animate-fade-in opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Искусство побеждать себя каждый день
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Записаться на тренировку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ПРОГРАММЫ ТРЕНИРОВОК
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Выберите программу, которая подходит именно вам
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kids Program */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Users" size={40} className="text-red-600" />
                  <Badge variant="secondary" className="bg-red-100 text-red-800">4-12 лет</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Детская группа
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Основы самообороны, дисциплина, уверенность
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Развитие координации</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Базовые техники</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Воспитание характера</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            {/* Adult Program */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Zap" size={40} className="text-red-600" />
                  <Badge variant="secondary" className="bg-red-100 text-red-800">18+ лет</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Взрослая группа
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Интенсивная подготовка, техника, спарринги
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Продвинутые техники</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Спарринг-тренировки</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Физическая подготовка</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            {/* Competition Program */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Trophy" size={40} className="text-red-600" />
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Профи</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Соревновательная
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Подготовка к турнирам, аттестации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Турнирная подготовка</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Индивидуальные тренировки</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>Система поясов</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
              НАШИ ТРЕНЕРЫ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Опытные мастера с международными достижениями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trainer 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={60} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Сергей Волков
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Главный тренер • Черный пояс 3 дан
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Чемпион России 2019</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Опыт 15+ лет</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Мастер спорта</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Trainer 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={60} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Анна Кузнецова
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Детский тренер • Коричневый пояс
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Специализация: дети</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Опыт 8+ лет</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>КМС по джиу-джитсу</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Trainer 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-red-500">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={60} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Дмитрий Соколов
                </CardTitle>
                <CardDescription className="text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Тренер-методист • Черный пояс 2 дан
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Призер Европы 2020</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Опыт 12+ лет</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-red-600" />
                    <span>Международный судья</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
              РАСПИСАНИЕ ТРЕНИРОВОК
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Выберите удобное время для тренировок
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekdays */}
            <Card className="p-8 border-2 hover:border-red-500 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-black text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  БУДНИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Детская группа</p>
                      <p className="text-gray-600">4-12 лет</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">17:00 - 18:00</p>
                      <p className="text-gray-600">Пн, Ср, Пт</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Взрослая группа</p>
                      <p className="text-gray-600">18+ лет</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">19:00 - 20:30</p>
                      <p className="text-gray-600">Пн, Ср, Пт</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Соревновательная</p>
                      <p className="text-gray-600">Профи</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">20:30 - 22:00</p>
                      <p className="text-gray-600">Пн, Ср, Пт</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekends */}
            <Card className="p-8 border-2 hover:border-red-500 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-black text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  ВЫХОДНЫЕ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Семейные тренировки</p>
                      <p className="text-gray-600">Родители + дети</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">10:00 - 11:30</p>
                      <p className="text-gray-600">Суббота</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Открытые спарринги</p>
                      <p className="text-gray-600">Все уровни</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">12:00 - 14:00</p>
                      <p className="text-gray-600">Суббота</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-red-600">
                    <div>
                      <p className="font-semibold text-black">Мастер-классы</p>
                      <p className="text-gray-600">Специальные техники</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">15:00 - 17:00</p>
                      <p className="text-gray-600">Воскресенье</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              КОНТАКТЫ
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Свяжитесь с нами для записи на тренировку
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>АДРЕС</h3>
                  <p className="text-gray-300">ул. Спортивная, 15, Москва</p>
                  <p className="text-gray-300">Спорткомплекс "Победа"</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>ТЕЛЕФОН</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-gray-300">+7 (985) 987-65-43</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>EMAIL</h3>
                  <p className="text-gray-300">info@jiujitsu-club.ru</p>
                  <p className="text-gray-300">trainer@jiujitsu-club.ru</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>РЕЖИМ РАБОТЫ</h3>
                  <p className="text-gray-300">Пн-Пт: 16:00 - 22:00</p>
                  <p className="text-gray-300">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                ЗАПИШИТЕСЬ НА ПРОБНУЮ ТРЕНИРОВКУ
              </h3>
              <p className="text-center text-gray-100 mb-8 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Первое занятие бесплатно для новых учеников
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Записаться сейчас
                </Button>
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Задать вопрос
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-200 mb-4">Следите за нами в соцсетях:</p>
                <div className="flex justify-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                    <Icon name="Instagram" size={24} className="text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                    <Icon name="Youtube" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;