"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Star, MapPin, Phone, Mail, Sparkles, Heart, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { useRef } from "react"

const services = [
  {
    name: "Autorski Masaż Relaksacyjny",
    duration: "60 min",
    price: "480 zł",
    description: "Luksusowy masaż całego ciała zaprojektowany, aby rozpuścić stres i przywrócić harmonię umysłu, ciała i ducha",
    icon: "💆‍♀️",
    features: ["Techniki szwedzkie", "Aromatyczne olejki", "Redukcja stresu"]
  },
  {
    name: "Terapia Gorącymi Kamieniami",
    duration: "90 min",
    price: "720 zł",
    description: "Starożytna terapia uzdrawiająca wykorzystująca gładkie, podgrzane kamienie do uwolnienia głębokiego napięcia mięśni",
    icon: "🔥",
    features: ["Kamienie wulkaniczne", "Głębokie rozluźnienie mięśni", "Poprawa krążenia"]
  },
  {
    name: "Podróż Aromaterapią",
    duration: "75 min",
    price: "600 zł",
    description: "Wciągające doświadczenie sensoryczne łączące masaż terapeutyczny z starannie dobranymi olejkami eterycznymi",
    icon: "🌸",
    features: ["Najwyższej jakości olejki eteryczne", "Personalizowane mieszanki", "Poprawa nastroju"]
  },
  {
    name: "Masaż Tkanek Głębokich",
    duration: "60 min",
    price: "560 zł",
    description: "Intensywny masaż terapeutyczny ukierunkowany na chroniczne napięcia i węzły mięśniowe dla trwałej ulgi",
    icon: "💪",
    features: ["Ukierunkowane naciski", "Łagodzenie bólu", "Poprawa mobilności"]
  },
  {
    name: "Odmładzający Zabieg na Twarz",
    duration: "45 min",
    price: "400 zł",
    description: "Profesjonalny zabieg pielęgnacyjny skóry dla promiennej, zdrowo wyglądającej cery z użyciem organicznych produktów premium",
    icon: "✨",
    features: ["Organiczne produkty", "Działanie przeciwstarzeniowe", "Analiza skóry"]
  },
  {
    name: "Azyl dla Par",
    duration: "60 min",
    price: "880 zł",
    description: "Intymne doświadczenie masażu dla dwojga, idealne na specjalne okazje i wspólny relaks",
    icon: "💕",
    features: ["Prywatny apartament", "Serwowanie szampana", "Płatki róż"]
  }
]

const testimonials = [
  {
    name: "Anna Kowalska",
    rating: 5,
    text: "Absolutnie transformujące doświadczenie! Dbałość o szczegóły i profesjonalna obsługa przekroczyły wszystkie moje oczekiwania. Wyszłam czując się całkowicie odnowiona.",
    service: "Terapia Gorącymi Kamieniami",
    location: "Warszawa",
    image: "AK"
  },
  {
    name: "Michał Nowak",
    rating: 5,
    text: "Najlepsze spa w mieście! Jestem stałym klientem masażu tkanek głębokich. Terapeuci są niesamowicie utalentowani, a atmosfera to czysta błogość.",
    service: "Masaż Tkanek Głębokich",
    location: "Kraków",
    image: "MN"
  },
  {
    name: "Ewa Wiśniewska",
    rating: 5,
    text: "Sesja aromaterapii to była prawdziwa magia. Od momentu, gdy weszłam, poczułam się przeniesiona do świata spokoju. Gorąco polecam każdemu!",
    service: "Podróż Aromaterapią",
    location: "Gdańsk",
    image: "EW"
  }
]

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-green-600" />,
    title: "Doświadczenie Premium",
    description: "Luksusowe zabiegi z wykorzystaniem najlepszych organicznych produktów i zaawansowanych technik"
  },
  {
    icon: <Heart className="w-8 h-8 text-green-600" />,
    title: "Koncentracja na Wellness",
    description: "Holistyczne podejście do zdrowia i dobrostanu dla umysłu, ciała i ducha"
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Bezpieczne i Czyste",
    description: "Najwyższe standardy higieny i protokoły bezpieczeństwa dla Twojego spokoju ducha"
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: "Nagradzane",
    description: "Uznane za doskonałość w usługach spa i satysfakcję klientów"
  }
]

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-lg shadow-elegant sticky top-0 z-50 border-b border-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Serenity Spa</h1>
                <p className="text-xs text-gray-500 font-medium">Luksusowe Wellness</p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                {name: "Start", href: "#home"},
                {name: "Usługi", href: "#services"}, 
                {name: "O Nas", href: "#about"},
                {name: "Kontakt", href: "#contact"}
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Zarezerwuj Teraz
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-card">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gradient">Zarezerwuj Swój Relaks</DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Wybierz preferowaną usługę i godzinę. Skontaktujemy się z Tobą, aby potwierdzić Twoje luksusowe doświadczenie.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Select Service</label>
                      <select className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                        {services.map((service) => (
                          <option key={service.name} value={service.name}>
                            {service.icon} {service.name} - {service.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Preferowana Data</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Preferowana Godzina</label>
                        <select className="w-full h-12 p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                          {["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"].map(time => (
                            <option key={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Twoje Imię i Nazwisko</label>
                      <Input placeholder="Wpisz swoje imię i nazwisko" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Numer Telefonu</label>
                      <Input type="tel" placeholder="Wpisz swój numer telefonu" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Specjalne Życzenia</label>
                      <Textarea placeholder="Ewentualne specjalne życzenia lub preferencje..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 py-3">
                      <Heart className="w-4 h-4 mr-2" />
                      Potwierdź Luksusową Rezerwację
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-blue-100/50 to-purple-100/50"
        />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-gray-900 block sm:inline">Odnajdź Swój</span>
                <br className="hidden sm:block" />
                <span className="text-gradient bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline">
                  Wewnętrzny Spokój
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4"
              >
                Doświadcz najwyższego sanktuarium wellness i odmłodzenia. Nasze wielokrotnie nagradzane spa łączy 
                <span className="font-semibold text-green-700"> starożytne tradycje uzdrawiania</span> z 
                <span className="font-semibold text-blue-700"> nowoczesnym luksusem</span>, tworząc niezapomnianą podróż odnowy.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-luxury hover:shadow-2xl transition-all duration-500 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold group w-full sm:w-auto"
                    >
                      <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:animate-spin transition-transform duration-500" />
                      Rozpocznij Swoją Podróż
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </DialogTrigger>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold border-2 border-gray-300 hover:border-green-600 hover:text-green-600 transition-all duration-300 shadow-elegant hover:shadow-luxury group w-full sm:w-auto"
                >
                  <Heart className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:text-red-500 transition-colors duration-300" />
                  Zobacz Nasze Usługi
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="font-semibold">4.9/5 Oceny</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
                  <Award className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-semibold">Laureat Nagród SPA</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
                  <Shield className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="font-semibold">15+ Lat Doświadczenia</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-50/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gray-900">Autorskie</span>
              <span className="text-gradient block">Zabiegi</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Odkryj naszą wyselekcjonowaną kolekcję premium doświadczeń wellness, 
              z których każde zostało zaprojektowane, aby przywrócić harmonię i podkreślić Twój naturalny blask.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <Card 
                  variant="elegant"
                  className="h-full hover-lift cursor-pointer border-0 shadow-soft hover:shadow-luxury transition-all duration-500 group-hover:border-green-200"
                >
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-green-600" />
                        {service.duration}
                      </span>
                      <span className="text-3xl font-bold text-green-600">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700">Includes:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Zarezerwuj Ten Zabieg
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dlaczego Serenity</h2>
            <p className="text-xl text-gray-600">Doświadcz różnicy, która nas wyróżnia</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card variant="glass" className="h-full hover-lift">
                  <CardContent className="p-8">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.h2 
                className="text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gray-900">O Nas</span>
                <span className="text-gradient block">Serenity Spa</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 text-lg text-gray-600 leading-relaxed"
              >
                <p>
                  Od ponad <span className="font-semibold text-green-700">15 lat</span>, Serenity Spa jest latarnią wellness i spokoju w sercu miasta. Nasza podróż rozpoczęła się od prostej wizji: stworzenia sanktuarium, gdzie starożytna mądrość uzdrawiania spotyka się z nowoczesnym luksusem.
                </p>
                <p>
                  Nasz zespół <span className="font-semibold text-blue-700">certyfikowanych mistrzów terapeutów</span> łączy sprawdzone czasem techniki z najnowocześniejszymi praktykami wellness, zapewniając, że każdy zabieg to transformujące doświadczenie, które karmi Twoje ciało, umysł i ducha.
                </p>
                <p>
                  Wierzymy, że dbanie o siebie to nie luksus, ale konieczność. Naszą misją jest pomóc Ci odłączyć się od stresu życia codziennego i ponownie połączyć z Twoim wewnętrznym spokojem, pozostawiając Cię odświeżonego, odnowionego i promiennie zdrowego.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-8 mt-12"
              >
                {[
                  { number: "15+", label: "Lat Doskonałości", color: "text-green-600" },
                  { number: "10K+", label: "Zadowolonych Klientów", color: "text-blue-600" },
                  { number: "25+", label: "Usług Premium", color: "text-purple-600" },
                  { number: "98%", label: "Wskaźnik Satysfakcji", color: "text-emerald-600" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div 
                  className="h-[600px] bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-3xl shadow-luxury overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Placeholder for spa image */}
                  <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
                    🧘‍♀️
                  </div>
                </motion.div>
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-8 -left-8"
                >
                  <Card variant="glass" className="p-6 shadow-luxury">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Award className="w- h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Zwycięzcy Nagrody</div>
                        <div className="text-sm text-gray-600">Najlepsze SPA 2025</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gray-900">Opinie</span>
              <span className="text-gradient block">Klientów</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Odkryj, dlaczego tysiące osób powierza nam swoją podróż ku wellness. 
              Prawdziwe historie od naszych cenionych gości, którzy znaleźli swoje sanktuarium.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card variant="elegant" className="h-full hover-lift relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-600 mb-8 leading-relaxed text-lg italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    
                    {/* Client info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-500 font-medium">{testimonial.location}</div>
                        <div className="text-sm text-green-600 font-medium">{testimonial.service}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-12 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Certyfikowana Doskonałość</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <span className="font-medium">Lider Branży</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6" />
              <span className="font-medium">10 000+ Zadowolonych Klientów</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-white">Odwiedź Nasze</span>
              <span className="text-gradient-blue block">Sanktuarium</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Doświadcz spokoju w sercu miasta. Twoja podróż ku wellness zaczyna się od jednego kroku.
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Skontaktuj się z Nami</h3>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <MapPin className="w-6 h-6 text-green-400" />, label: "Odwiedź Nas", text: "ul. Wellness 123, Centrum, Warszawa 00-001" },
                  { icon: <Phone className="w-6 h-6 text-blue-400" />, label: "Zadzwoń", text: "+48 123 456 789" },
                  { icon: <Mail className="w-6 h-6 text-purple-400" />, label: "Napisz", text: "hello@serenityspa.pl" },
                  { icon: <Clock className="w-6 h-6 text-emerald-400" />, label: "Godziny", text: "Pon-Nie: 9:00 - 20:00" }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.label}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{contact.label}</div>
                      <div className="text-gray-300">{contact.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold mb-6 text-white">Śledź Naszą Podróż</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", icon: "f", color: "from-blue-600 to-blue-700" },
                    { name: "Instagram", icon: "@", color: "from-pink-600 to-purple-700" },
                    { name: "LinkedIn", icon: "in", color: "from-blue-700 to-blue-800" }
                  ].map((social) => (
                    <motion.div 
                      key={social.name}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center cursor-pointer shadow-lg group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold text-sm group-hover:animate-pulse">{social.icon}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass" className="p-8 shadow-luxury border-gray-700">
                <h3 className="text-2xl font-bold mb-8 text-white">Wyślij Nam Wiadomość</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">Imię</label>
                      <Input placeholder="Twoje imię" className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">Nazwisko</label>
                      <Input placeholder="Twoje nazwisko" className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Adres Email</label>
                    <Input type="email" placeholder="twoj.email@przykład.pl" className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Numer Telefonu</label>
                    <Input type="tel" placeholder="+48 123 456 789" className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Wiadomość</label>
                    <Textarea 
                      placeholder="Opowiedz nam o swoich celach wellness lub zadaj pytanie..."
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-luxury hover:shadow-2xl transition-all duration-300 py-4 text-lg font-semibold">
                      <Sparkles className="w-5 h-5 mr-3" />
                      Wyślij Wiadomość
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">Serenity Spa</span>
                <div className="text-sm text-gray-400 font-medium">Luksusowe Sanktuarium Wellness</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-400">Szybkie Linki</h4>
                <div className="space-y-2">
                  {[
                    {name: "Start", href: "home"},
                    {name: "Usługi", href: "services"},
                    {name: "O Nas", href: "about"},
                    {name: "Kontakt", href: "contact"},
                    {name: "Rezerwacja", href: "book-now"}
                  ].map((link) => (
                    <a key={link.name} href={`#${link.href}`} className="block text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">Usługi</h4>
                <div className="space-y-2">
                  {services.slice(0, 5).map((service) => (
                    <div key={service.name} className="text-gray-400 text-sm">
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-purple-400">Kontakt</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>ul. Wellness 123</div>
                  <div>Centrum, Warszawa 00-001</div>
                  <div>+48 123 456 789</div>
                  <div>hello@serenityspa.pl</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-t border-gray-800 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-400 text-sm">
                © 2024 Serenity Spa. Wszelkie prawa zastrzeżone. | Polityka Prywatności | Regulamin
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Crafted with ❤️ for your wellness journey
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
