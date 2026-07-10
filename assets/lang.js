/* ============================================================
   Salud! Holistic SPA  --  EN / ES Language Toggle
   assets/lang.js  v1.0
   ============================================================ */
(function(){
'use strict';

/* ---------- flat translation dictionary ---------- */
var T={
/* ===== COMMON : navbar + footer + mobile menu ===== */
'nav.home':                    {en:'Home',es:'Inicio'},
'nav.services':                {en:'Services',es:'Servicios'},
'nav.booking':                 {en:'Booking',es:'Reservar'},
'nav.exclusive':               {en:'Exclusive Offers',es:'Ofertas Exclusivas'},
'nav.super':                   {en:'Super Offers',es:'Super Ofertas'},
'nav.reviews':                 {en:'Reviews',es:'Resenas'},
'nav.contacts':                {en:'Contacts',es:'Contacto'},
'footer.brand.desc':           {en:'A holistic wellness destination where ancient healing meets modern luxury. A soothing wellness spa experience in the Bronx.',es:'Un destino de bienestar holistico donde la sanacion ancestral se encuentra con el lujo moderno. Una experiencia relajante de spa en el Bronx.'},
'footer.quick':                {en:'Quick Links',es:'Enlaces Rapidos'},
'footer.book':                 {en:'Book Appointment',es:'Reservar Cita'},
'footer.exclusive':            {en:"Today's Exclusive Offers",es:'Ofertas Exclusivas de Hoy'},
'footer.packages':             {en:'Package Super Offers',es:'Super Ofertas de Paquetes'},
'footer.contact':              {en:'Contact Us',es:'Contactenos'},
'footer.connect':              {en:'Connect',es:'Conectar'},
'footer.privacy':              {en:'Privacy Policy',es:'Politica de Privacidad'},
'footer.terms':                {en:'Terms and Conditions',es:'Terminos y Condiciones'},
'footer.refund':               {en:'Non-Refund Policy',es:'Politica de No Reembolso'},
'footer.copy':                 {en:'2026 &copy; Salud! Holistic SPA LLC. All rights reserved.',es:'2026 &copy; Salud! Holistic SPA LLC. Todos los derechos reservados.'},
'footer.brandtag':             {en:'A Brand of mediaXtreme',es:'Una Marca de mediaXtreme'},

/* ===== INDEX PAGE ===== */
'idx.hero.h1':                 {en:'A Wellness<br>Spa <em>Escape</em>',es:'Un <em>Escape</em><br>de Bienestar'},
'idx.hero.p':                  {en:'Experience holistic wellness tailored for your lifestyle.',es:'Experimenta el bienestar holistico adaptado a tu estilo de vida.'},
'idx.hero.cta':                {en:'View Super Offers',es:'Ver Super Ofertas'},
'idx.hero.scroll':             {en:'Scroll',es:'Deslizar'},
'idx.services.label':          {en:'Our Treatments',es:'Nuestros Tratamientos'},
'idx.services.title':          {en:'Wellness Practices',es:'Practicas de Bienestar'},
'idx.services.subtitle':       {en:'Each treatment is a carefully curated journey designed to restore balance and awaken your inner radiance.',es:'Cada tratamiento es un viaje cuidadosamente disenado para restaurar el equilibrio y despertar tu resplandor interior.'},
'idx.svc1.h3':                 {en:'Colon Hydrotherapy',es:'Hidroterapia de Colon'},
'idx.svc1.p':                  {en:'Private, comfortable, and odorless gravity-fed bowel cleansing, often used as a gentle alternative to traditional prep for colonoscopies.',es:'Limpieza intestinal privada, comoda e inodora por gravedad, utilizada frecuentemente como alternativa suave a la preparacion tradicional para colonoscopias.'},
'idx.svc2.h3':                 {en:'Therapeutic Massage',es:'Masaje Terapeutico'},
'idx.svc2.p':                  {en:'Deep tissue and holistic bodywork to release tension and restore vitality.',es:'Trabajo corporal profundo y holistico para liberar la tension y restaurar la vitalidad.'},
'idx.svc3.h3':                 {en:'Radiance Facials',es:'Faciales de Resplandor'},
'idx.svc3.p':                  {en:'Customized botanical facials that nourish, hydrate, and illuminate your skin.',es:'Faciales botanicos personalizados que nutren, hidratan e iluminan tu piel.'},
'idx.exp.label':               {en:'Why Choose Us',es:'Por Que Elegirnos'},
'idx.exp.title':               {en:'Where Healing<br>Meets Luxury',es:'Donde la Sanacion<br>Encuentra el Lujo'},
'idx.exp.subtitle':            {en:'At Salud!, we believe wellness is not an indulgence -- it is a necessity. Our practitioners combine ancient holistic traditions with modern therapeutic techniques in an environment designed to transport you from the everyday.',es:'En Salud!, creemos que el bienestar no es un lujo -- es una necesidad. Nuestros profesionales combinan tradiciones holisticas ancestrales con tecnicas terapeuticas modernas en un ambiente disenado para transportarte de lo cotidiano.'},
'idx.stat1.num':               {en:'21+',es:'21+'},
'idx.stat1.label':             {en:'Years of Care',es:'Anos de Cuidado'},
'idx.stat2.num':               {en:'20+',es:'20+'},
'idx.stat2.label':             {en:'Treatments',es:'Tratamientos'},
'idx.stat3.num':               {en:'20K+',es:'20K+'},
'idx.stat3.label':             {en:'Happy Clients',es:'Clientes Felices'},
'idx.stat4.num':               {en:'4.9',es:'4.9'},
'idx.stat4.label':             {en:'Star Rating',es:'Calificacion'},
'idx.test.label':              {en:'Client Stories',es:'Historias de Clientes'},
'idx.test.title':              {en:'Words of Wellness',es:'Palabras de Bienestar'},
'idx.t1.text':                 {en:'This is not just a spa -- it is a sanctuary. The moment I walked in, the energy shifted. The massage therapy here is truly transformative.',es:'Esto no es solo un spa -- es un santuario. En el momento en que entre, la energia cambio. La terapia de masaje aqui es verdaderamente transformadora.'},
'idx.t1.role':                 {en:'Regular Client',es:'Cliente Regular'},
'idx.t2.text':                 {en:'I have been to countless spas in New York, and Salud! stands apart. The attention to detail, the holistic approach, the genuine care -- it is unlike anything else.',es:'He visitado innumerables spas en Nueva York, y Salud! se destaca. La atencion al detalle, el enfoque holistico, el cuidado genuino -- no se compara con nada mas.'},
'idx.t2.role':                 {en:'Package Member',es:'Miembro de Paquete'},
'idx.t3.text':                 {en:'The facial treatments here are incredible. My skin has never looked better. The therapists really understand what your skin needs and customize everything.',es:'Los tratamientos faciales aqui son increibles. Mi piel nunca se ha visto mejor. Las terapeutas realmente entienden lo que tu piel necesita y personalizan todo.'},
'idx.t3.role':                 {en:'Loyal Client',es:'Cliente Fiel'},
'idx.t4.text':                 {en:'After discovering their Package Super Offers, I have been coming every month. The value is amazing and the quality never drops. My go-to wellness spot!',es:'Despues de descubrir sus Super Ofertas de Paquetes, he venido cada mes. El valor es increible y la calidad nunca baja. Mi lugar favorito de bienestar!'},
'idx.t4.role':                 {en:'Monthly Visitor',es:'Visitante Mensual'},
'cta.h2':                      {en:'Book Your Escape Today',es:'Reserva Tu Escape Hoy'},
'cta.p':                       {en:'Let us craft your personalized wellness journey.',es:'Permitenos crear tu viaje personalizado de bienestar.'},
'cta.btn':                     {en:'Reserve Your Session',es:'Reserva Tu Sesion'},

/* ===== BOOKING PAGE ===== */
'bk.eyebrow':                  {en:'Salud! Holistic SPA',es:'Salud! Holistic SPA'},
'bk.h1':                       {en:'Reserve Your<br>Wellness Journey',es:'Reserva Tu<br>Viaje de Bienestar'},
'bk.p':                        {en:'Select your treatment, choose your time, and begin your transformation.',es:'Selecciona tu tratamiento, elige tu horario y comienza tu transformacion.'},
'bk.cancel.h3':                {en:'Cancellation Policy',es:'Politica de Cancelacion'},
'bk.cancel.p':                 {en:'We kindly ask for at least 24 hours notice if you need to cancel or reschedule your appointment. Late cancellations may be subject to a fee.',es:'Le pedimos amablemente al menos 24 horas de anticipacion si necesita cancelar o reprogramar su cita. Las cancelaciones tardias pueden estar sujetas a un cargo.'},
'bk.deposit.h3':               {en:'Deposits',es:'Depositos'},
'bk.deposit.p':                {en:'A deposit may be required for select premium services and package bookings. This amount will be applied toward your session total.',es:'Se puede requerir un deposito para servicios premium selectos y reservas de paquetes. Este monto se aplicara al total de su sesion.'},
'bk.questions.h3':             {en:'Questions?',es:'Preguntas?'},
'bk.questions.p':              {en:'We are here to help you plan the perfect visit. Call us anytime at <a href="tel:+16465409032">+1 (646) 540.9032</a> and our team will assist you.',es:'Estamos aqui para ayudarle a planificar la visita perfecta. Llamenos en cualquier momento al <a href="tel:+16465409032">+1 (646) 540.9032</a> y nuestro equipo le asistira.'},

/* ===== CONTACTS PAGE ===== */
'ct.eyebrow':                  {en:'Salud Holistic Spa',es:'Salud Holistic Spa'},
'ct.h1':                       {en:'Get In Touch',es:'Contactenos'},
'ct.p':                        {en:'We would love to hear from you',es:'Nos encantaria saber de usted'},
'ct.form.h2':                  {en:'Send Us a Message',es:'Envienos un Mensaje'},
'ct.form.sub':                 {en:'Fill out the form below and we will get back to you within 24 hours.',es:'Complete el formulario a continuacion y le responderemos dentro de 24 horas.'},
'ct.form.name':                {en:'Full Name',es:'Nombre Completo'},
'ct.form.email':               {en:'Email Address',es:'Correo Electronico'},
'ct.form.phone':               {en:'Phone Number',es:'Numero de Telefono'},
'ct.form.service':             {en:'Service Interest',es:'Servicio de Interes'},
'ct.form.message':             {en:'Your Message',es:'Su Mensaje'},
'ct.form.btn':                 {en:'Send Message',es:'Enviar Mensaje'},
'ct.form.success':             {en:'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',es:'Gracias! Su mensaje ha sido enviado exitosamente. Le responderemos dentro de 24 horas.'},
'ct.form.error':               {en:'Something went wrong. Please try again or call us at 646.540.9032.',es:'Algo salio mal. Por favor intente de nuevo o llamenos al 646.540.9032.'},

'ct.consent.sms':              {en:'I agree to receive SMS/text messages from Salud Holistic Spa regarding my inquiry, appointments, and promotional offers. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe at any time. Mobile information will not be shared with third parties for marketing or promotional purposes.',es:'Acepto recibir mensajes SMS/texto de Salud Holistic Spa sobre mi consulta, citas y ofertas promocionales. La frecuencia de mensajes varia. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar la suscripcion en cualquier momento. La informacion movil no se compartira con terceros con fines de marketing o promocionales.'},
'ct.consent.submit':           {en:'By submitting this form, you agree to our',es:'Al enviar este formulario, usted acepta nuestra'},
'ct.consent.and':              {en:'and',es:'y'},
'ct.consent.rates':            {en:'Standard messaging rates may apply.',es:'Pueden aplicarse tarifas estandar de mensajeria.'},
'ct.ph.name':                  {en:'Your full name',es:'Su nombre completo'},
'ct.ph.email':                 {en:'your@email.com',es:'su@correo.com'},
'ct.ph.phone':                 {en:'(646) 540-9032',es:'(646) 540-9032'},
'ct.ph.service':               {en:'Select a service...',es:'Seleccione un servicio...'},
'ct.ph.message':               {en:'Tell us how we can help you...',es:'Diganos como podemos ayudarle...'},
'ct.opt.colon':                {en:'Colon Cleanse',es:'Limpieza de Colon'},
'ct.opt.general':              {en:'General Inquiry',es:'Consulta General'},
'ct.opt.massage':              {en:'Massage',es:'Masaje'},
'ct.opt.facial':               {en:'Facial',es:'Facial'},
'ct.opt.body':                 {en:'Body Treatment',es:'Tratamiento Corporal'},
'ct.opt.package':              {en:'Package Info',es:'Info de Paquetes'},
'ct.phone.h3':                 {en:'Phone & SMS',es:'Telefono y SMS'},
'ct.address.h3':               {en:'Address',es:'Direccion'},
'ct.howto.h3':                 {en:'How to Get Here',es:'Como Llegar'},
'ct.howto.subway':             {en:'Subway + Bus',es:'Metro + Autobus'},
'ct.howto.direct':             {en:'Direct Bus Routes',es:'Rutas Directas de Autobus'},
'ct.hours.h3':                 {en:'Business Hours',es:'Horario de Atencion'},
'ct.hours.mon':                {en:'Monday',es:'Lunes'},
'ct.hours.tuefri':             {en:'Tuesday - Friday',es:'Martes - Viernes'},
'ct.hours.sat':                {en:'Saturday',es:'Sabado'},
'ct.hours.sun':                {en:'Sunday',es:'Domingo'},
'ct.hours.closed':             {en:'Closed',es:'Cerrado'},
'ct.social.h3':                {en:'Follow Us',es:'Siguenos'},

/* ===== EXCLUSIVE OFFERS PAGE ===== */
'ex.eyebrow':                  {en:'Limited Time Only',es:'Solo Por Tiempo Limitado'},
'ex.h1':                       {en:"Today's Exclusive Offers",es:'Ofertas Exclusivas de Hoy'},
'ex.p':                        {en:'Limited-time wellness deals, refreshed daily.',es:'Ofertas de bienestar por tiempo limitado, renovadas diariamente.'},
'ex.countdown':                {en:'Offers refresh in:',es:'Las ofertas se renuevan en:'},
'ex.hrs':                      {en:'Hrs',es:'Hrs'},
'ex.min':                      {en:'Min',es:'Min'},
'ex.sec':                      {en:'Sec',es:'Seg'},
'ex.ordernow':                 {en:'Order Now',es:'Ordenar Ahora'},
'ex.fine':                     {en:'All purchases are final. See our <a href="refund.html">Non-Refund Policy</a> for details. Offers are subject to availability and may change without notice.',es:'Todas las compras son finales. Consulte nuestra <a href="refund.html">Politica de No Reembolso</a> para mas detalles. Las ofertas estan sujetas a disponibilidad y pueden cambiar sin previo aviso.'},
/* offer card names */
'ex.o1.h3':                    {en:'Colon Hydrotherapy Treatment',es:'Tratamiento de Hidroterapia de Colon'},
'ex.o1.desc':                  {en:'Gentle internal cleansing to detoxify, improve digestion, and restore gut wellness.',es:'Limpieza interna suave para desintoxicar, mejorar la digestion y restaurar la salud intestinal.'},
'ex.o2.h3':                    {en:'Lymphatic Drainage Massage',es:'Masaje de Drenaje Linfatico'},
'ex.o2.desc':                  {en:'Specialized technique to reduce swelling, boost immunity, and promote natural detoxification.',es:'Tecnica especializada para reducir la hinchazon, fortalecer la inmunidad y promover la desintoxicacion natural.'},
'ex.o3.h3':                    {en:'Lymphatic Drainage With Cavitation',es:'Drenaje Linfatico con Cavitacion'},
'ex.o3.desc':                  {en:'Advanced lymphatic therapy combined with ultrasonic cavitation for enhanced fat reduction and body contouring.',es:'Terapia linfatica avanzada combinada con cavitacion ultrasonica para mayor reduccion de grasa y contorno corporal.'},
'ex.o4.h3':                    {en:'60-Minute Massage Treatments',es:'Tratamientos de Masaje de 60 Minutos'},
'ex.o4.desc':                  {en:'Choose wood therapy, Swedish, or deep tissue massage. Expert therapists tailored to your needs.',es:'Elija terapia de madera, masaje sueco o de tejido profundo. Terapeutas expertos adaptados a sus necesidades.'},
'ex.o5.h3':                    {en:'Low Laser-Lipo Treatments',es:'Tratamientos de Laser-Lipo de Baja Intensidad'},
'ex.o5.desc':                  {en:'Non-invasive laser technology to target stubborn fat cells and sculpt your ideal body contour.',es:'Tecnologia laser no invasiva para atacar celulas de grasa rebeldes y esculpir tu contorno corporal ideal.'},
'ex.o6.h3':                    {en:'Carboxy Facial Rejuvenation',es:'Rejuvenecimiento Facial con Carboxiterapia'},
'ex.o6.desc':                  {en:'CO2 infusion therapy to stimulate collagen, reduce dark circles, and restore youthful radiance.',es:'Terapia de infusion de CO2 para estimular el colageno, reducir ojeras y restaurar la luminosidad juvenil.'},
'ex.o7.h3':                    {en:'Anti-Aging Facial',es:'Facial Anti-Envejecimiento'},
'ex.o7.desc':                  {en:'Radio-frequency skin tightening paired with Vitamin C serum to reverse signs of aging and firm your complexion.',es:'Radiofrecuencia para tensar la piel combinada con serum de Vitamina C para revertir los signos del envejecimiento y reafirmar tu tez.'},
'ex.o8.h3':                    {en:'Microdermabrasion Facial &amp; Deep-Pore Cleansing',es:'Microdermoabrasion Facial y Limpieza Profunda de Poros'},
'ex.o8.desc':                  {en:'Crystal exfoliation combined with deep extraction for smoother, brighter, and healthier-looking skin.',es:'Exfoliacion con cristales combinada con extraccion profunda para una piel mas suave, luminosa y saludable.'},
'ex.o9.h3':                    {en:'Carboxytherapy or Mesotherapy',es:'Carboxiterapia o Mesoterapia'},
'ex.o9.desc':                  {en:'Targeted treatment for fat reduction, skin tightening, and cellulite elimination using CO2 or micro-injections.',es:'Tratamiento dirigido para reduccion de grasa, tensado de piel y eliminacion de celulitis usando CO2 o microinyecciones.'},
'ex.o10.h3':                   {en:'Laser Hair-Removal',es:'Depilacion Laser'},
'ex.o10.desc':                 {en:'Permanent hair reduction for small areas using advanced laser technology. Smooth, lasting results.',es:'Reduccion permanente del vello en areas pequenas usando tecnologia laser avanzada. Resultados suaves y duraderos.'},
'ex.o11.h3':                   {en:'Infrared Body Wrap',es:'Envoltura Corporal Infrarroja'},
'ex.o11.desc':                 {en:'Burn calories through deep sweating with infrared heat therapy. Detoxify, relax, and slim down naturally.',es:'Quema calorias mediante sudoracion profunda con terapia de calor infrarrojo. Desintoxica, relaja y adelgaza naturalmente.'},
'ex.o12.h3':                   {en:'Full Body Carboxy Treatment',es:'Tratamiento Corporal Completo de Carboxiterapia'},
'ex.o12.desc':                 {en:'The Full Body Carboxy Treatment is an advanced aesthetic procedure designed to rejuvenate and revitalize the skin across the entire body.',es:'El Tratamiento Corporal Completo de Carboxiterapia es un procedimiento estetico avanzado disenado para rejuvenecer y revitalizar la piel de todo el cuerpo.'},
/* tier labels */
'ex.tier.1session':            {en:'1 Session',es:'1 Sesion'},
'ex.tier.2sessions':           {en:'2 Sessions',es:'2 Sesiones'},
'ex.tier.3sessions':           {en:'3 Sessions',es:'3 Sesiones'},
'ex.tier.4sessions':           {en:'4 Sessions',es:'4 Sesiones'},
'ex.tier.6sessions':           {en:'6 Sessions',es:'6 Sesiones'},
'ex.tier.8sessions':           {en:'8 Sessions',es:'8 Sesiones'},
'ex.tier.1small':              {en:'1 Session (Small Area)',es:'1 Sesion (Area Pequena)'},

/* ===== PACKAGE OFFERS PAGE ===== */
'pk.eyebrow':                  {en:'Curated Wellness',es:'Bienestar Seleccionado'},
'pk.h1':                       {en:'Package Super Offers',es:'Super Ofertas de Paquetes'},
'pk.p':                        {en:'Invest in your wellness journey with our curated packages and save hundreds.',es:'Invierte en tu viaje de bienestar con nuestros paquetes seleccionados y ahorra cientos.'},
'pk.label':                    {en:'Exclusive Packages',es:'Paquetes Exclusivos'},
'pk.title':                    {en:'Transformative Savings',es:'Ahorros Transformadores'},
'pk.subtitle':                 {en:'Bundled treatments designed to deliver lasting results at exceptional value.',es:'Tratamientos combinados disenados para ofrecer resultados duraderos a un valor excepcional.'},
'pk.ordernow':                 {en:'Order Now',es:'Ordenar Ahora'},
'pk.1.name':                   {en:'40 Day Holistic Diet',es:'Dieta Holistica de 40 Dias'},
'pk.1.desc':                   {en:'Complete 40-day cycle designed for transformative results. Lose one pound per day with our guided holistic nutrition and detox program.',es:'Ciclo completo de 40 dias disenado para resultados transformadores. Pierde una libra por dia con nuestro programa guiado de nutricion holistica y desintoxicacion.'},
'pk.2.name':                   {en:'Liver &amp; Gallbladder Flush',es:'Limpieza de Higado y Vesicula'},
'pk.2.desc':                   {en:'2 complete detox cycles with a full body kit included. Deep internal cleansing to support liver and gallbladder function and overall vitality.',es:'2 ciclos completos de desintoxicacion con kit corporal completo incluido. Limpieza interna profunda para apoyar la funcion del higado, la vesicula y la vitalidad general.'},
'pk.3.name':                   {en:'5 Colon Cleanse Sessions',es:'5 Sesiones de Limpieza de Colon'},
'pk.3.desc':                   {en:'5 professional colonic sessions plus optional coffee enema add-on at $35 per session. Thorough internal cleansing for digestive health.',es:'5 sesiones colonicas profesionales mas opcion de enema de cafe a $35 por sesion. Limpieza interna completa para la salud digestiva.'},
'pk.4.name':                   {en:'Colonic Cleansing Package',es:'Paquete de Limpieza Colonica'},
'pk.4.desc':                   {en:'4 professional colonic sessions for a comprehensive cleanse. Restore balance and support your body\'s natural detoxification process.',es:'4 sesiones colonicas profesionales para una limpieza integral. Restaura el equilibrio y apoya el proceso natural de desintoxicacion de tu cuerpo.'},
'pk.5.name':                   {en:'Colon Cleansing Plus Infrared BodyWrap',es:'Limpieza de Colon mas Envoltura Corporal Infrarroja'},
'pk.5.desc':                   {en:'4 sessions combining colonic cleansing with infrared body wrap therapy. Dual-action detox and rejuvenation for total body renewal.',es:'4 sesiones que combinan limpieza colonica con terapia de envoltura corporal infrarroja. Desintoxicacion y rejuvenecimiento de doble accion para la renovacion corporal total.'},
'pk.6.name':                   {en:'Laser Hair Removal',es:'Depilacion Laser'},
'pk.6.desc':                   {en:'Full body laser hair removal including stomach. 1 session at $120 (save $255) or 10 sessions at $1,000 for maximum savings and smooth, lasting results.',es:'Depilacion laser de cuerpo completo incluyendo abdomen. 1 sesion a $120 (ahorra $255) o 10 sesiones a $1,000 para maximo ahorro y resultados suaves y duraderos.'},
'pk.7.name':                   {en:'Wood Therapy Plus Cavitation or Radio Frequency',es:'Terapia de Madera mas Cavitacion o Radiofrecuencia'},
'pk.7.desc':                   {en:'10 sessions of wood therapy combined with your choice of ultrasonic cavitation or radio frequency. Sculpt and contour your body naturally.',es:'10 sesiones de terapia de madera combinadas con tu eleccion de cavitacion ultrasonica o radiofrecuencia. Esculpe y moldea tu cuerpo de forma natural.'},
'pk.8.name':                   {en:'Lymphatic Drainage Or Wood Massage',es:'Drenaje Linfatico o Masaje de Madera'},
'pk.8.desc':                   {en:'10 sessions of lymphatic drainage or wood massage therapy. Reduce fluid retention, boost circulation, and promote natural detoxification.',es:'10 sesiones de drenaje linfatico o terapia de masaje de madera. Reduce la retencion de liquidos, mejora la circulacion y promueve la desintoxicacion natural.'},
'pk.9.name':                   {en:'Lymphatic Drainage Massage Plus Cavitation',es:'Masaje de Drenaje Linfatico mas Cavitacion'},
'pk.9.desc':                   {en:'5 sessions combining lymphatic drainage massage with ultrasonic cavitation. Target stubborn areas while supporting your lymphatic system.',es:'5 sesiones que combinan masaje de drenaje linfatico con cavitacion ultrasonica. Ataca areas rebeldes mientras apoya tu sistema linfatico.'},
'pk.10.name':                  {en:'Mesotherapy Plus Carboxytherapy (15 Sessions)',es:'Mesoterapia mas Carboxiterapia (15 Sesiones)'},
'pk.10.desc':                  {en:'15 sessions each of mesotherapy and carboxytherapy. Targets cellulite, stretch marks, and skin tightening for comprehensive body transformation.',es:'15 sesiones de mesoterapia y carboxiterapia. Ataca la celulitis, estrias y tensado de piel para una transformacion corporal integral.'},
'pk.11.name':                  {en:'Mesotherapy Plus Carboxytherapy (5 Sessions)',es:'Mesoterapia mas Carboxiterapia (5 Sesiones)'},
'pk.11.desc':                  {en:'5 sessions each of mesotherapy and carboxytherapy. Effective fat reduction and skin improvement in a shorter treatment plan.',es:'5 sesiones de mesoterapia y carboxiterapia. Reduccion efectiva de grasa y mejora de la piel en un plan de tratamiento mas corto.'},
'pk.12.name':                  {en:'Anti-Aging Facial',es:'Facial Anti-Envejecimiento'},
'pk.12.desc':                  {en:'1 luxurious session with Facial Radio-Frequency, Oxygen-Infusion, and Vitamin C Serum. Rejuvenate and restore youthful radiance in a single visit.',es:'1 sesion lujosa con Radiofrecuencia Facial, Infusion de Oxigeno y Serum de Vitamina C. Rejuvenece y restaura la luminosidad juvenil en una sola visita.'},
/* how it works */
'pk.hiw.label':                {en:'Simple &amp; Seamless',es:'Simple y Facil'},
'pk.hiw.title':                {en:'How Packages Work',es:'Como Funcionan los Paquetes'},
'pk.step1.h3':                 {en:'Choose',es:'Elige'},
'pk.step1.p':                  {en:'Select the package that best fits your wellness goals. Each package is designed to deliver transformative results at unbeatable savings.',es:'Selecciona el paquete que mejor se adapte a tus objetivos de bienestar. Cada paquete esta disenado para ofrecer resultados transformadores con ahorros inigualables.'},
'pk.step2.h3':                 {en:'Schedule',es:'Agenda'},
'pk.step2.p':                  {en:'Book your sessions at your convenience through our online booking system or by calling us directly. We work around your schedule.',es:'Reserva tus sesiones a tu conveniencia a traves de nuestro sistema de reservas en linea o llamandonos directamente. Nos adaptamos a tu horario.'},
'pk.step3.h3':                 {en:'Transform',es:'Transforma'},
'pk.step3.p':                  {en:'Experience the cumulative benefits of consistent wellness care. Each session builds upon the last, guiding you toward lasting transformation.',es:'Experimenta los beneficios acumulativos del cuidado constante del bienestar. Cada sesion se construye sobre la anterior, guiandote hacia una transformacion duradera.'},
'pk.fine':                     {en:'All package purchases are final and non-transferable. Packages are valid for 12 months from date of purchase. See our <a href="refund.html">Non-Refund Policy</a> for complete details.',es:'Todas las compras de paquetes son finales y no transferibles. Los paquetes son validos por 12 meses desde la fecha de compra. Consulte nuestra <a href="refund.html">Politica de No Reembolso</a> para detalles completos.'},

/* ===== PAYMENT MODAL (shared by exclusive + packages) ===== */
'pay.title':                   {en:'Complete Your Order',es:'Complete Su Orden'},
'pay.total':                   {en:'Total',es:'Total'},
'pay.btn':                     {en:'Pay Now',es:'Pagar Ahora'},
'pay.secure':                  {en:'Secured by Stripe',es:'Protegido por Stripe'},
'pay.success.h3':              {en:'Payment Successful!',es:'Pago Exitoso!'},
'pay.success.p':               {en:'Your order has been confirmed. Book your appointment now.',es:'Su orden ha sido confirmada. Reserve su cita ahora.'},
'pay.success.btn':             {en:'Book Your Appointment',es:'Reserve Su Cita'},

/* ===== PRIVACY PAGE ===== */
'pv.h1':                       {en:'Privacy Policy',es:'Politica de Privacidad'},
'pv.updated':                  {en:'Last Updated: May 2026',es:'Ultima Actualizacion: Mayo 2026'},
'pv.intro':                    {en:'Salud! Holistic SPA LLC ("we," "our," or "us") respects your privacy. This policy outlines how we collect, use, and protect your personal information when you visit saludholisticspa.com or book services with us.',es:'Salud! Holistic SPA LLC ("nosotros" o "nuestro") respeta su privacidad. Esta politica describe como recopilamos, usamos y protegemos su informacion personal cuando visita saludholisticspa.com o reserva servicios con nosotros.'},
'pv.h2.collect':               {en:'Information We Collect',es:'Informacion que Recopilamos'},
'pv.h3.personal':              {en:'Personal Data',es:'Datos Personales'},
'pv.p.personal':               {en:'Name, email address, phone number, and health intake information provided during booking.',es:'Nombre, direccion de correo electronico, numero de telefono e informacion de salud proporcionada durante la reserva.'},
'pv.h3.payment':               {en:'Payment Data',es:'Datos de Pago'},
'pv.p.payment':                {en:'Processed securely via Stripe. We do not store full credit card numbers on our servers.',es:'Procesados de forma segura a traves de Stripe. No almacenamos numeros completos de tarjetas de credito en nuestros servidores.'},
'pv.h3.cookies':               {en:'Cookies',es:'Cookies'},
'pv.p.cookies':                {en:'We use cookies to enhance site navigation and analyze site traffic.',es:'Usamos cookies para mejorar la navegacion del sitio y analizar el trafico.'},
'pv.h2.use':                   {en:'How We Use Your Information',es:'Como Usamos Su Informacion'},
'pv.use1':                     {en:'To manage and confirm your spa appointments.',es:'Para gestionar y confirmar sus citas de spa.'},
'pv.use2':                     {en:'To send "Today\'s Exclusive Offers" if you have opted-in.',es:'Para enviar "Ofertas Exclusivas de Hoy" si ha optado por recibirlas.'},
'pv.use3':                     {en:'To improve our holistic services and website functionality.',es:'Para mejorar nuestros servicios holisticos y la funcionalidad del sitio web.'},
'pv.h2.third':                 {en:'Third-Party Sharing',es:'Compartir con Terceros'},
'pv.p.third':                  {en:'We do not sell your data. We only share information with service providers (like booking software) necessary to complete your transaction. Mobile information will not be shared with third parties for marketing or promotional purposes.',es:'No vendemos sus datos. Solo compartimos informacion con proveedores de servicios (como software de reservas) necesarios para completar su transaccion. La informacion movil no se compartira con terceros con fines de marketing o promocionales.'},
'pv.h2.security':              {en:'Data Security',es:'Seguridad de Datos'},
'pv.p.security':               {en:'We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.',es:'Implementamos medidas de seguridad estandar de la industria, incluyendo encriptacion SSL, procesamiento seguro de pagos y auditorias de seguridad regulares para proteger su informacion personal de acceso no autorizado, alteracion o divulgacion.'},
'pv.h2.rights':                {en:'Your Rights',es:'Sus Derechos'},
'pv.r1':                       {en:'Request access to the personal data we hold about you.',es:'Solicitar acceso a los datos personales que tenemos sobre usted.'},
'pv.r2':                       {en:'Request correction of any inaccurate information.',es:'Solicitar la correccion de cualquier informacion inexacta.'},
'pv.r3':                       {en:'Request deletion of your personal data, subject to legal retention requirements.',es:'Solicitar la eliminacion de sus datos personales, sujeto a requisitos legales de retencion.'},
'pv.r4':                       {en:'Opt out of marketing communications at any time.',es:'Cancelar las comunicaciones de marketing en cualquier momento.'},
'pv.h2.children':              {en:"Children's Privacy",es:'Privacidad de Menores'},
'pv.p.children':               {en:'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.',es:'Nuestros servicios no estan dirigidos a personas menores de 18 anos. No recopilamos intencionalmente informacion personal de menores.'},
'pv.h2.changes':               {en:'Changes to This Policy',es:'Cambios a Esta Politica'},
'pv.p.changes':                {en:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',es:'Podemos actualizar esta Politica de Privacidad periodicamente. Le notificaremos cualquier cambio publicando la nueva Politica de Privacidad en esta pagina y actualizando la fecha de "Ultima Actualizacion".'},
'pv.contact.h3':               {en:'Contact Us About Privacy',es:'Contactenos Sobre Privacidad'},
'pv.contact.p':                {en:'If you have any questions about this Privacy Policy, please contact us at:',es:'Si tiene alguna pregunta sobre esta Politica de Privacidad, contactenos en:'},

/* ===== REFUND PAGE ===== */
'rf.h1':                       {en:'Non-Refund Policy',es:'Politica de No Reembolso'},
'rf.sub':                      {en:'All Sales Are Final',es:'Todas las Ventas Son Finales'},
'rf.intro':                    {en:'At Salud! Holistic SPA, our providers dedicate specific time and resources to your wellness journey. To maintain this high standard of care, we operate under a Strict Non-Refund Policy.',es:'En Salud! Holistic SPA, nuestros proveedores dedican tiempo y recursos especificos a su viaje de bienestar. Para mantener este alto estandar de atencion, operamos bajo una Politica Estricta de No Reembolso.'},
'rf.h2.final':                 {en:'Final Sale',es:'Venta Final'},
'rf.p.final':                  {en:'All purchases for "Today\'s Exclusive Offers" and "Package Super Offers" are final. No monetary refunds will be issued once a purchase is completed.',es:'Todas las compras de "Ofertas Exclusivas de Hoy" y "Super Ofertas de Paquetes" son finales. No se emitiran reembolsos monetarios una vez completada la compra.'},
'rf.h2.cancel':                {en:'Cancellations',es:'Cancelaciones'},
'rf.p.cancel':                 {en:"Appointments cancelled with less than 24 hours' notice will be charged the full service amount. We strongly recommend providing adequate notice if you are unable to attend your scheduled appointment.",es:'Las citas canceladas con menos de 24 horas de anticipacion seran cobradas el monto completo del servicio. Recomendamos encarecidamente proporcionar aviso adecuado si no puede asistir a su cita programada.'},
'rf.h2.noshow':                {en:'No-Shows',es:'Ausencias'},
'rf.p.noshow':                 {en:'Failure to arrive for a scheduled appointment results in a 100% forfeiture of the service fee. Our providers reserve their time exclusively for you, and no-shows prevent other clients from accessing care.',es:'No presentarse a una cita programada resulta en la perdida del 100% de la tarifa del servicio. Nuestros proveedores reservan su tiempo exclusivamente para usted, y las ausencias impiden que otros clientes accedan a la atencion.'},
'rf.h2.reschedule':            {en:'Rescheduling',es:'Reprogramacion'},
'rf.p.reschedule':             {en:'We allow a one-time rescheduling of your appointment if requested at least 48 hours in advance, subject to availability. Additional rescheduling requests are not guaranteed.',es:'Permitimos una reprogramacion unica de su cita si se solicita con al menos 48 horas de anticipacion, sujeto a disponibilidad. Las solicitudes adicionales de reprogramacion no estan garantizadas.'},
'rf.h2.gift':                  {en:'Gift Cards and Packages',es:'Tarjetas de Regalo y Paquetes'},
'rf.p.gift':                   {en:'Gift cards and service packages are non-transferable and cannot be redeemed for cash. They must be used by the original purchaser or designated recipient within the validity period stated at the time of purchase.',es:'Las tarjetas de regalo y los paquetes de servicios no son transferibles y no se pueden canjear por efectivo. Deben ser utilizados por el comprador original o el destinatario designado dentro del periodo de validez indicado en el momento de la compra.'},
'rf.ack.h3':                   {en:'Acknowledgement',es:'Reconocimiento'},
'rf.ack.p1':                   {en:'By completing a purchase or booking with Salud! Holistic SPA, you acknowledge that you have read, understood, and agree to this Non-Refund Policy.',es:'Al completar una compra o reserva con Salud! Holistic SPA, usted reconoce que ha leido, entendido y acepta esta Politica de No Reembolso.'},
'rf.ack.p2':                   {en:'For questions about this policy, contact us at',es:'Para preguntas sobre esta politica, contactenos en'},

/* ===== TERMS PAGE ===== */
'tm.h1':                       {en:'Terms and Conditions',es:'Terminos y Condiciones'},
'tm.updated':                  {en:'Last Updated: May 2026',es:'Ultima Actualizacion: Mayo 2026'},
'tm.intro':                    {en:'By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.',es:'Al acceder a este sitio web, usted acepta estar sujeto a estos Terminos y Condiciones y todas las leyes y regulaciones aplicables. Si no esta de acuerdo con alguno de estos terminos, tiene prohibido usar o acceder a este sitio.'},
'tm.h2.disclaimer':            {en:'Service Disclaimer',es:'Descargo de Responsabilidad del Servicio'},
'tm.p.disclaimer':             {en:'Our holistic treatments are for wellness purposes and are not a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician before starting new wellness regimens. Salud! Holistic SPA and its practitioners do not diagnose, treat, cure, or prevent any disease or medical condition.',es:'Nuestros tratamientos holisticos son para fines de bienestar y no sustituyen el consejo medico profesional, diagnostico o tratamiento. Siempre consulte a su medico antes de comenzar nuevos regimenes de bienestar. Salud! Holistic SPA y sus profesionales no diagnostican, tratan, curan ni previenen ninguna enfermedad o condicion medica.'},
'tm.h2.booking':               {en:'Booking and Appointments',es:'Reservas y Citas'},
'tm.p.booking':                {en:'When you book an appointment through our website, you enter into a service agreement with Salud! Holistic SPA LLC. You agree to provide accurate contact and health intake information to ensure the safety and effectiveness of your treatment.',es:'Al reservar una cita a traves de nuestro sitio web, usted celebra un acuerdo de servicio con Salud! Holistic SPA LLC. Acepta proporcionar informacion de contacto y salud precisa para garantizar la seguridad y efectividad de su tratamiento.'},
'tm.bk1':                      {en:'Appointments are confirmed via email or SMS upon successful booking.',es:'Las citas se confirman por correo electronico o SMS tras una reserva exitosa.'},
'tm.bk2':                      {en:'You must arrive on time for your scheduled appointment. Late arrivals may result in shortened service time.',es:'Debe llegar a tiempo a su cita programada. Las llegadas tardias pueden resultar en tiempo de servicio reducido.'},
'tm.bk3':                      {en:'Please review our <a href="refund.html" style="color:var(--gold);text-decoration:none;font-weight:500">Non-Refund Policy</a> for cancellation and no-show terms.',es:'Por favor revise nuestra <a href="refund.html" style="color:var(--gold);text-decoration:none;font-weight:500">Politica de No Reembolso</a> para terminos de cancelacion y ausencias.'},
'tm.h2.conduct':               {en:'User Conduct',es:'Conducta del Usuario'},
'tm.p.conduct':                {en:'Users agree not to use the site for any unlawful purpose. We reserve the right to refuse service to anyone at our discretion. You agree not to:',es:'Los usuarios aceptan no utilizar el sitio para ningun proposito ilegal. Nos reservamos el derecho de rechazar servicio a cualquier persona a nuestra discrecion. Usted acepta no:'},
'tm.c1':                       {en:'Submit false or misleading information through any forms on the site.',es:'Enviar informacion falsa o enganosa a traves de cualquier formulario del sitio.'},
'tm.c2':                       {en:'Attempt to interfere with the proper functioning of this website.',es:'Intentar interferir con el funcionamiento adecuado de este sitio web.'},
'tm.c3':                       {en:'Use automated systems, bots, or scrapers to access the site without our express written permission.',es:'Usar sistemas automatizados, bots o scrapers para acceder al sitio sin nuestro permiso escrito expreso.'},
'tm.c4':                       {en:'Reproduce, distribute, or exploit any content from this website for commercial purposes.',es:'Reproducir, distribuir o explotar cualquier contenido de este sitio web con fines comerciales.'},
'tm.h2.ip':                    {en:'Intellectual Property',es:'Propiedad Intelectual'},
'tm.p.ip':                     {en:'All content, including logos, text, images, graphics, and design elements, is the property of Salud! Holistic SPA LLC and mediaXtreme. This content is protected by applicable copyright and trademark laws. Unauthorized use, reproduction, or distribution of any materials from this website is strictly prohibited.',es:'Todo el contenido, incluyendo logotipos, texto, imagenes, graficos y elementos de diseno, es propiedad de Salud! Holistic SPA LLC y mediaXtreme. Este contenido esta protegido por las leyes de derechos de autor y marcas registradas aplicables. El uso, reproduccion o distribucion no autorizada de cualquier material de este sitio web esta estrictamente prohibida.'},
'tm.h2.liability':             {en:'Limitation of Liability',es:'Limitacion de Responsabilidad'},
'tm.p.liability':              {en:'Salud! Holistic SPA LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or our services. Our total liability shall not exceed the amount paid for the specific service in question.',es:'Salud! Holistic SPA LLC no sera responsable por danos indirectos, incidentales, especiales o consecuentes que surjan de o en conexion con el uso de este sitio web o nuestros servicios. Nuestra responsabilidad total no excedera el monto pagado por el servicio especifico en cuestion.'},
'tm.h2.links':                 {en:'Third-Party Links',es:'Enlaces de Terceros'},
'tm.p.links':                  {en:'This website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. Accessing these links is at your own risk.',es:'Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables del contenido, politicas de privacidad o practicas de sitios de terceros. Acceder a estos enlaces es bajo su propio riesgo.'},
'tm.h2.law':                   {en:'Governing Law',es:'Ley Aplicable'},
'tm.p.law':                    {en:'These terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.',es:'Estos terminos se regiran e interpretaran de acuerdo con las leyes del Estado de Nueva York, sin tener en cuenta sus disposiciones sobre conflictos de leyes.'},
'tm.h2.changes':               {en:'Changes to Terms',es:'Cambios a los Terminos'},
'tm.p.changes':                {en:'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following any changes constitutes acceptance of the revised terms.',es:'Nos reservamos el derecho de modificar estos Terminos y Condiciones en cualquier momento. Los cambios seran efectivos inmediatamente despues de su publicacion en esta pagina. Su uso continuado del sitio web despues de cualquier cambio constituye la aceptacion de los terminos revisados.'},
'tm.contact.h3':               {en:'Questions About These Terms?',es:'Preguntas Sobre Estos Terminos?'},
'tm.contact.p':                {en:'If you have any questions about these Terms and Conditions, please contact us at:',es:'Si tiene alguna pregunta sobre estos Terminos y Condiciones, contactenos en:'},

/* ===== SERVICES PAGE ===== */
'sv.hero.h1':                  {en:'Our <em>Services</em>',es:'Nuestros <em>Servicios</em>'},
'sv.s1.h2':                    {en:'Injectable &amp; Advanced Treatments',es:'Tratamientos Inyectables y Avanzados'},
'sv.s2.h2':                    {en:'Massage Therapies',es:'Terapias de Masaje'},
'sv.s3.h2':                    {en:'Detox &amp; Internal Wellness',es:'Desintoxicacion y Bienestar Interno'},
'sv.s4.h2':                    {en:'Facial Treatments',es:'Tratamientos Faciales'},
'sv.s5.h2':                    {en:'Laser &amp; Technology',es:'Laser y Tecnologia'},
'sv.s6.h2':                    {en:'Nutrition &amp; Wellness Support',es:'Nutricion y Apoyo al Bienestar'},
'sv.c1.h3':                    {en:'Carboxytherapy',es:'Carboxiterapia'},
'sv.c1.p':                     {en:'Infusion of medical-grade CO2 beneath the skin to stimulate circulation, boost collagen production, and target stubborn aesthetic concerns with precision.',es:'Infusion de CO2 de grado medico bajo la piel para estimular la circulacion, aumentar la produccion de colageno y tratar preocupaciones esteticas con precision.'},
'sv.c2.h3':                    {en:'Mesotherapy',es:'Mesoterapia'},
'sv.c2.p':                     {en:'Micro-injections of vitamins, enzymes, and amino acids delivered directly to target areas to nourish, tighten, and revitalize skin, body, and hair.',es:'Microinyecciones de vitaminas, enzimas y aminoacidos entregadas directamente a areas objetivo para nutrir, tensar y revitalizar piel, cuerpo y cabello.'},
'sv.c3.h3':                    {en:'Massage Therapies',es:'Terapias de Masaje'},
'sv.c3.p':                     {en:'An extensive collection of hands-on healing modalities, from deep tissue release to gentle prenatal care. Each session is customized to dissolve tension and restore harmony.',es:'Una amplia coleccion de modalidades de sanacion manual, desde liberacion de tejido profundo hasta cuidado prenatal suave. Cada sesion se personaliza para disolver la tension y restaurar la armonia.'},
'sv.c4.h3':                    {en:'Colon Hydrotherapy',es:'Hidroterapia de Colon'},
'sv.c4.p':                     {en:"Gentle, temperature-controlled water cleansing to detoxify the colon, improve digestion, and support the body's natural elimination processes.",es:'Limpieza suave con agua de temperatura controlada para desintoxicar el colon, mejorar la digestion y apoyar los procesos naturales de eliminacion del cuerpo.'},
'sv.c5.h3':                    {en:'Liver &amp; Gallbladder Detox',es:'Desintoxicacion de Higado y Vesicula'},
'sv.c5.p':                     {en:'A guided cleansing protocol designed to support liver function, promote bile flow, and help the body flush toxins for renewed energy and clarity.',es:'Un protocolo de limpieza guiado disenado para apoyar la funcion hepatica, promover el flujo biliar y ayudar al cuerpo a eliminar toxinas para energia y claridad renovadas.'},
'sv.c6.h3':                    {en:'Facial Treatments',es:'Tratamientos Faciales'},
'sv.c6.p':                     {en:'A curated menu of results-driven facials, from classic cleansing rituals to advanced clinical treatments. Each is tailored to your unique skin type and concerns.',es:'Un menu seleccionado de faciales orientados a resultados, desde rituales clasicos de limpieza hasta tratamientos clinicos avanzados. Cada uno se adapta a tu tipo de piel y necesidades.'},
'sv.c7.h3':                    {en:'Laser Hair Removal',es:'Depilacion Laser'},
'sv.c7.p':                     {en:'Advanced laser technology for safe, effective, and long-lasting hair reduction on all skin types. Achieve silky-smooth results with each progressive session.',es:'Tecnologia laser avanzada para una reduccion de vello segura, efectiva y duradera en todos los tipos de piel. Logra resultados sedosos y suaves con cada sesion progresiva.'},
'sv.c8.h3':                    {en:'Ultrasound Cavitation',es:'Cavitacion Ultrasonica'},
'sv.c8.p':                     {en:'Non-invasive body contouring that uses ultrasonic waves to break down stubborn fat cells, promoting natural elimination for a slimmer, more sculpted silhouette.',es:'Contorno corporal no invasivo que usa ondas ultrasonicas para descomponer celulas de grasa rebeldes, promoviendo la eliminacion natural para una silueta mas delgada y esculpida.'},
'sv.c9.h3':                    {en:'Infrared Body Wrap',es:'Envoltura Corporal Infrarroja'},
'sv.c9.p':                     {en:'Therapeutic infrared heat therapy that penetrates deep into tissues to accelerate detoxification, reduce inflammation, and promote calorie burn while you relax.',es:'Terapia de calor infrarrojo que penetra profundamente en los tejidos para acelerar la desintoxicacion, reducir la inflamacion y promover la quema de calorias mientras te relajas.'},
'sv.c10.h3':                   {en:'Low-Level Laser Therapy',es:'Terapia Laser de Baja Intensidad'},
'sv.c10.p':                    {en:'Cold laser photobiomodulation that stimulates cellular repair, reduces pain and inflammation, and accelerates healing at the deepest tissue level.',es:'Fotobiomodulacion con laser frio que estimula la reparacion celular, reduce el dolor y la inflamacion, y acelera la sanacion al nivel mas profundo del tejido.'},
'sv.c11.h3':                   {en:'Laser Skin Tightening',es:'Tensado de Piel con Laser'},
'sv.c11.p':                    {en:'Non-surgical collagen-stimulating laser treatment that firms and lifts sagging skin, restoring youthful contours to the face, neck, and body.',es:'Tratamiento laser no quirurgico que estimula el colageno, reafirma y levanta la piel flacida, restaurando contornos juveniles al rostro, cuello y cuerpo.'},
'sv.c12.h3':                   {en:'B-Complex Injection',es:'Inyeccion de Complejo B'},
'sv.c12.p':                    {en:'A potent vitamin B-complex boost delivered intramuscularly for immediate energy, enhanced metabolism, and nervous system support.',es:'Un potente impulso de complejo vitaminico B administrado intramuscularmente para energia inmediata, metabolismo mejorado y apoyo al sistema nervioso.'},
'sv.c13.h3':                   {en:'Nutritional Plan',es:'Plan Nutricional'},
'sv.c13.p':                    {en:'Personalized dietary guidance crafted by our wellness experts to complement your treatments and support your health goals from the inside out.',es:'Orientacion dietetica personalizada creada por nuestros expertos en bienestar para complementar tus tratamientos y apoyar tus objetivos de salud desde adentro hacia afuera.'},
'sv.c14.h3':                   {en:'Wellness Consultation',es:'Consulta de Bienestar'},
'sv.c14.p':                    {en:'A comprehensive one-on-one assessment where our specialists evaluate your health, discuss your goals, and design a personalized wellness roadmap.',es:'Una evaluacion integral individual donde nuestros especialistas evaluan tu salud, discuten tus objetivos y disenan una hoja de ruta personalizada de bienestar.'},
'sv.cta.h2':                   {en:'Ready to Begin Your <em>Wellness Journey</em>?',es:'Lista para Comenzar Tu <em>Viaje de Bienestar</em>?'},

/* price-related words used in save badges */
'word.save':                   {en:'Save',es:'Ahorra'},
'word.value':                  {en:'Value',es:'Valor'},
'word.yousave':                {en:'You save',es:'Ahorras'},
'word.sessions':               {en:'sessions',es:'sesiones'}
};

/* ---------- state ---------- */
var STORAGE_KEY='salud_lang';
var currentLang='en';

/* ---------- get initial language ---------- */
function getInitialLang(){
  // 1. URL parameter
  var params=new URLSearchParams(window.location.search);
  var urlLang=params.get('lang');
  if(urlLang==='es'||urlLang==='en') return urlLang;
  // 2. localStorage
  try{var stored=localStorage.getItem(STORAGE_KEY);if(stored==='es'||stored==='en') return stored;}catch(e){}
  // 3. browser language
  var nav=(navigator.language||navigator.userLanguage||'').toLowerCase();
  if(nav.indexOf('es')===0) return 'es';
  return 'en';
}

/* ---------- apply translations ---------- */
function applyLang(lang){
  currentLang=lang;
  try{localStorage.setItem(STORAGE_KEY,lang);}catch(e){}
  document.documentElement.lang=lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key=el.getAttribute('data-i18n');
    if(T[key]&&T[key][lang]!==undefined){
      el.innerHTML=T[key][lang];
    }
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
    var key=el.getAttribute('data-i18n-placeholder');
    if(T[key]&&T[key][lang]!==undefined){
      el.placeholder=T[key][lang];
    }
  });

  // option text for selects
  document.querySelectorAll('[data-i18n-option]').forEach(function(el){
    var key=el.getAttribute('data-i18n-option');
    if(T[key]&&T[key][lang]!==undefined){
      el.textContent=T[key][lang];
    }
  });

  // toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.classList.toggle('active',btn.getAttribute('data-lang')===lang);
  });

  // sync language to embedded iframes (booking widget etc.)
  document.querySelectorAll('iframe[src*="revenuivaai.com"]').forEach(function(iframe){
    var src=iframe.getAttribute('src');
    var base=src.split('?')[0];
    iframe.setAttribute('src', lang==='es' ? base+'?lang=es' : base);
  });

  // propagate lang to all internal links so navigation preserves language
  document.querySelectorAll('a[href]').forEach(function(a){
    var href=a.getAttribute('href');
    if(!href) return;
    if(href.indexOf('http')===0 && href.indexOf('saludholisticspa.com')===-1) return;
    if(href.indexOf('mailto:')===0 || href.indexOf('tel:')===0 || href.indexOf('sms:')===0 || href.indexOf('#')===0 || href.indexOf('javascript:')===0) return;
    var base=href.split('?')[0].split('#')[0];
    var hash=href.indexOf('#')>-1 ? href.substring(href.indexOf('#')) : '';
    if(lang==='es'){
      a.setAttribute('href', base+'?lang=es'+hash);
    } else {
      a.setAttribute('href', base+hash);
    }
  });
}

/* ---------- bind toggle buttons (already in HTML) ---------- */
function bindToggles(){
  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      var lang=this.getAttribute('data-lang');
      applyLang(lang);
    });
  });
}

/* ---------- init ---------- */
function init(){
  bindToggles();
  var lang=getInitialLang();
  applyLang(lang);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

/* expose for external use */
window.saludLang={apply:applyLang,get:function(){return currentLang;},T:T};
})();
