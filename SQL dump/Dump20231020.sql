CREATE DATABASE  IF NOT EXISTS `tp2_dev` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tp2_dev`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tp2_dev
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actores`
--

DROP TABLE IF EXISTS `actores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actores` (
  `idactor` int NOT NULL AUTO_INCREMENT,
  `nombreyapellido` varchar(45) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idactor`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actores`
--

LOCK TABLES `actores` WRITE;
/*!40000 ALTER TABLE `actores` DISABLE KEYS */;
INSERT INTO `actores` VALUES (1,'Adeel Akhtar','Akhtar','Adeel'),(2,'Luke Allen-Gale','Allen-Gale','Luke'),(3,'Mädchen Amick','Amick','Mädchen'),(4,'Gillian Anderson','Anderson','Gillian'),(5,'Jennifer Aniston','Aniston','Jennifer'),(6,'Awkwafina','Awkwafina','Awkwafina'),(7,'Michael B. Jordan','B. Jordan','Michael'),(8,'Christian Bale','Bale','Christian'),(9,'Caitriona Balfe','Balfe','Caitriona'),(10,'Chris Bartlett','Bartlett','Chris'),(11,'Gana Bayarsaikhan','Bayarsaikhan','Gana'),(12,'Emily Bayiokos','Bayiokos','Emily'),(13,'Sean Bean','Bean','Sean'),(14,'Zazie Beetz','Beetz','Zazie'),(15,'Dalila Bela','Bela','Dalila'),(16,'Nina Bergman','Bergman','Nina'),(17,'Jon Bernthal','Bernthal','Jon'),(18,'Mayim Bialik','Bialik','Mayim'),(19,'Kerry Bishé','Bishé','Kerry'),(20,'Jack Black','Black','Jack'),(21,'Millie Bobby Brown','Bobby Brown','Millie'),(22,'Helena Bonham Carter','Bonham Carter','Helena'),(23,'Chadwick Boseman','Boseman','Chadwick'),(24,'John Boyega','Boyega','John'),(25,'Alice Braga','Braga','Alice'),(26,'Tom Braidwood','Braidwood','Tom'),(27,'Thomas Brodie-Sangster','Brodie-Sangster','Thomas'),(28,'Jessie Buckley','Buckley','Jessie'),(29,'David Castañeda','Castañeda','David'),(30,'Tom Cavanagh','Cavanagh','Tom'),(31,'Alana Cavanaugh','Cavanaugh','Alana'),(32,'Henry Cavill','Cavill','Henry'),(33,'Kyle Chandler','Chandler','Kyle'),(34,'Jessica Chastain','Chastain','Jessica'),(35,'Sam Claflin','Claflin','Sam'),(36,'Emilia Clarke','Clarke','Emilia'),(37,'Jason Clarke','Clarke','Jason'),(38,'Olivia Colman','Colman','Olivia'),(39,'Common','Common','Common'),(40,'Frances Conroy','Conroy','Frances'),(41,'Miranda Cosgrove','Cosgrove','Miranda'),(42,'Nikolaj Coster-Waldau','Coster-Waldau','Nikolaj'),(43,'Marion Cotillard','Cotillard','Marion'),(44,'Casey Cott','Cott','Casey'),(45,'Courteney Cox','Cox','Courteney'),(46,'Brett Cullen','Cullen','Brett'),(47,'Kaley Cuoco','Cuoco','Kaley'),(48,'Vincent DOnofrio','DOnofrio','Vincent'),(49,'Bryce Dallas Howard','Dallas Howard','Bryce'),(50,'Matt Damon','Damon','Matt'),(51,'Jeff Daniels','Daniels','Jeff'),(52,'Mackenzie Davis','Davis','Mackenzie'),(53,'Geena Davis','Davis','Geena'),(54,'Robert De Niro','De Niro','Robert'),(55,'Peter Dinklage','Dinklage','Peter'),(56,'Robert Downey Jr.','Downey Jr.','Robert'),(57,'David Duchovny','Duchovny','David'),(58,'Scott Eastwood','Eastwood','Scott'),(59,'Jennifer Ehle','Ehle','Jennifer'),(60,'Mary Elizabeth Winstead','Elizabeth Winstead','Mary'),(61,'Janina Elkin','Elkin','Janina'),(62,'Omar Epps','Epps','Omar'),(63,'Giancarlo Esposito','Esposito','Giancarlo'),(64,'Chris Evans','Evans','Chris'),(65,'O.T. Fagbenle','Fagbenle','O.T.'),(66,'Colin Farrell','Farrell','Colin'),(67,'Peter Ferdinando','Ferdinando','Peter'),(68,'Laurence Fishburne','Fishburne','Laurence'),(69,'Claire Fox','Fox','Claire'),(70,'Jorja Fox','Fox','Jorja'),(71,'Claire Foy','Foy','Claire'),(72,'Martin Freeman','Freeman','Martin'),(73,'Patrick Fugit','Fugit','Patrick'),(74,'Johnny Galecki','Galecki','Johnny'),(75,'Aidan Gallagher','Gallagher','Aidan'),(76,'Karen Gillan','Gillan','Karen'),(77,'Enver Gjokaj','Gjokaj','Enver'),(78,'Domhnall Gleeson','Gleeson','Domhnall'),(79,'Burn Gorman','Gorman','Burn'),(80,'Ryan Gosling','Gosling','Ryan'),(81,'Judy Greer','Greer','Judy'),(82,'Ioan Gruffudd','Gruffudd','Ioan'),(83,'Danai Gurira','Gurira','Danai'),(84,'Grant Gustin','Gustin','Grant'),(85,'Rio Hackford','Hackford','Rio'),(86,'Bill Hader','Hader','Bill'),(87,'David Harbour','Harbour','David'),(88,'Kit Harington','Harington','Kit'),(89,'Jared Harris','Harris','Jared'),(90,'Ed Harris','Harris','Ed'),(91,'Kevin Hart','Hart','Kevin'),(92,'Bruce Harwood','Harwood','Bruce'),(93,'Lena Headey','Headey','Lena'),(94,'Simon Helberg','Helberg','Simon'),(95,'Chris Hemsworth','Hemsworth','Chris'),(96,'Luke Hemsworth','Hemsworth','Luke'),(97,'Tom Hopper','Hopper','Tom'),(98,'William Hurt','Hurt','William'),(99,'Toby Huss','Huss','Toby'),(100,'Moses Ingram','Ingram','Moses'),(101,'Oscar Isaac','Isaac','Oscar'),(102,'Lucas Jade Zumann','Jade Zumann','Lucas'),(103,'Geraldine James','James','Geraldine'),(104,'Theo James','James','Theo'),(105,'Scarlett Johansson','Johansson','Scarlett'),(106,'Dwayne Johnson','Johnson','Dwayne'),(107,'Corey Johnson','Johnson','Corey'),(108,'Nick Jonas','Jonas','Nick'),(109,'Toby Jones','Jones','Toby'),(110,'Noah Jupe','Jupe','Noah'),(111,'Daniel Kaluuya','Kaluuya','Daniel'),(112,'Lorina Kamburova','Kamburova','Lorina'),(113,'Irrfan Khan','Khan','Irrfan'),(114,'Rinko Kikuchi','Kikuchi','Rinko'),(115,'Vanesa Kirby','Kirby','Vanesa'),(116,'Corrine Koslo','Koslo','Corrine'),(117,'Lisa Kudrow','Kudrow','Lisa'),(118,'Jesse L. Martin','L. Martin','Jesse'),(119,'Jude Law','Law','Jude'),(120,'Matt LeBlanc','LeBlanc','Matt'),(121,'Josh Lucas','Lucas','Josh'),(122,'Angus Macfadyen','Macfadyen','Angus'),(123,'Dominic Mafham','Mafham','Dominic'),(124,'John Malkovich','Malkovich','John'),(125,'Amy Manson','Manson','Amy'),(126,'Kate Mara','Mara','Kate'),(127,'Stacy Martin','Martin','Stacy'),(128,'James McAvoy','McAvoy','James'),(129,'Ewan McGregor','McGregor','Ewan'),(130,'Scoot McNairy','McNairy','Scoot'),(131,'Amybeth McNulty','McNulty','Amybeth'),(132,'Harry Melling','Melling','Harry'),(133,'Camila Mendes','Mendes','Camila'),(134,'Tobias Menzies','Menzies','Tobias'),(135,'Chris Messina','Messina','Chris'),(136,'Dash Mihok','Mihok','Dash'),(137,'Rhona Mitra','Mitra','Rhona'),(138,'Sonoya Mizuno','Mizuno','Sonoya'),(139,'Isaiah Mustafa','Mustafa','Isaiah'),(140,'Adam Nagaitis','Nagaitis','Adam'),(141,'Kunal Nayyar','Nayyar','Kunal'),(142,'Thandie Newton','Newton','Thandie'),(143,'Marisol Nichols','Nichols','Marisol'),(144,'Lupita Nyongo','Nyongo','Lupita'),(145,'Lee Pace','Pace','Lee'),(146,'Elliot Page','Page','Elliot'),(147,'Gwyneth Paltrow','Paltrow','Gwyneth'),(148,'Danielle Panabaker','Panabaker','Danielle'),(149,'Jim Parsons','Parsons','Jim'),(150,'Louis Partridge','Partridge','Louis'),(151,'Pedro Pascal','Pascal','Pedro'),(152,'Robert Patrick','Patrick','Robert'),(153,'Candice Patton','Patton','Candice'),(154,'Michael Peña','Peña','Michael'),(155,'Rosie Perez','Perez','Rosie'),(156,'Matthew Perry','Perry','Matthew'),(157,'Madelaine Petsch','Petsch','Madelaine'),(158,'Joaquin Phoenix','Phoenix','Joaquin'),(159,'Vincent Piazza','Piazza','Vincent'),(160,'Mitch Pileggi','Pileggi','Mitch'),(161,'Chloe Pirrie','Pirrie','Chloe'),(162,'Chris Pratt','Pratt','Chris'),(163,'Florence Pugh','Pugh','Florence'),(164,'Evan Rachel Wood','Rachel Wood','Evan'),(165,'Melissa Rauch','Rauch','Melissa'),(166,'Emmy Raver-Lampman','Raver-Lampman','Emmy'),(167,'Lili Reinhart','Reinhart','Lili'),(168,'Jeremy Renner','Renner','Jeremy'),(169,'Salli Richardson-Whitfield','Richardson-Whitfield','Salli'),(170,'Paul Ritter','Ritter','Paul'),(171,'Margot Robbie','Robbie','Margot'),(172,'Nick Robinson','Robinson','Nick'),(173,'Génesis Rodríguez','Rodríguez','Génesis'),(174,'Misty Rosas','Rosas','Misty'),(175,'Mark Ruffalo','Ruffalo','Mark'),(176,'Jay Ryan','Ryan','Jay'),(177,'David Schwimmer','Schwimmer','David'),(178,'Claire Selby','Selby','Claire'),(179,'Robert Sheehan','Sheehan','Robert'),(180,'Stellan Skarsgård','Skarsgård','Stellan'),(181,'Bill Skarsgård','Skarsgård','Bill'),(182,'Matt Smith','Smith','Matt'),(183,'Willow Smith','Smith','Willow'),(184,'Will Smith','Smith','Will'),(185,'Jurnee Smollett','Smollett','Jurnee'),(186,'Benjamin Sokolow','Sokolow','Benjamin'),(187,'Cailee Spaeny','Spaeny','Cailee'),(188,'Corey Stoll','Stoll','Corey'),(189,'Omar Sy','Sy','Omar'),(190,'Charlie Tahan','Tahan','Charlie'),(191,'Anya Taylor-Joy','Taylor-Joy','Anya'),(192,'Tessa Thompson','Thompson','Tessa'),(193,'Emma Thompson','Thompson','Emma'),(194,'R. H. Thomson','Thomson','R.H.'),(195,'Jing Tian','Tian','Jing'),(196,'Sophie Turner','Turner','Sophie'),(197,'Carlos Valdes','Valdes','Carlos'),(198,'Alicia Vikander','Vikander','Alicia'),(199,'Kate Walsh','Walsh','Kate'),(200,'Emily Watson','Watson','Emily'),(201,'Carl Weathers','Weathers','Carl'),(202,'James Weber Brown','Weber Brown','James'),(203,'Rachel Weisz','Weisz','Rachel'),(204,'Shea Whigham','Whigham','Shea'),(205,'Kristen Wiig','Wiig','Kristen'),(206,'Lia Williams','Williams','Lia'),(207,'Kate Winslet','Winslet','Kate'),(208,'Ray Winstone','Winstone','Ray'),(209,'Jeffrey Wright','Wright','Jeffrey');
/*!40000 ALTER TABLE `actores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `catalogoview`
--

DROP TABLE IF EXISTS `catalogoview`;
/*!50001 DROP VIEW IF EXISTS `catalogoview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `catalogoview` AS SELECT 
 1 AS `idpeli`,
 1 AS `poster`,
 1 AS `titulo`,
 1 AS `Categoria`,
 1 AS `Genero`,
 1 AS `resumen`,
 1 AS `temporadas`,
 1 AS `Reparto`,
 1 AS `trailer`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Serie'),(2,'Película');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `categoriasdisponiblesview`
--

DROP TABLE IF EXISTS `categoriasdisponiblesview`;
/*!50001 DROP VIEW IF EXISTS `categoriasdisponiblesview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `categoriasdisponiblesview` AS SELECT 
 1 AS `Categorias Disponibles`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `categoriasinter`
--

DROP TABLE IF EXISTS `categoriasinter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriasinter` (
  `idcategoriainter` int NOT NULL AUTO_INCREMENT,
  `idpeli` int NOT NULL,
  `idcategoria` int NOT NULL,
  PRIMARY KEY (`idcategoriainter`),
  KEY `categoria.idcategorias_idx` (`idcategoria`),
  KEY `fk4_idx` (`idpeli`),
  CONSTRAINT `fk3` FOREIGN KEY (`idcategoria`) REFERENCES `categorias` (`idcategoria`),
  CONSTRAINT `fk4` FOREIGN KEY (`idpeli`) REFERENCES `peliculas` (`idpeli`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriasinter`
--

LOCK TABLES `categoriasinter` WRITE;
/*!40000 ALTER TABLE `categoriasinter` DISABLE KEYS */;
INSERT INTO `categoriasinter` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,1),(6,6,2),(7,7,2),(8,8,2),(9,9,1),(10,10,1),(11,11,1),(12,12,1),(13,13,1),(14,14,1),(15,15,1),(16,16,1),(17,17,1),(18,18,2),(19,19,2),(20,20,2),(21,21,2),(22,22,2),(23,23,2),(24,24,2),(25,25,2),(26,26,2),(27,27,2),(28,28,2),(29,29,2),(30,30,2),(31,31,2),(32,32,2),(33,33,2),(34,34,2),(35,35,2);
/*!40000 ALTER TABLE `categoriasinter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `idgenero` int NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) NOT NULL,
  PRIMARY KEY (`idgenero`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Acción'),(2,'Aventura'),(3,'Ciencia Ficción'),(4,'Comedia'),(5,'Crimen'),(6,'Drama'),(7,'Familia'),(8,'Fantasía'),(9,'Ficción'),(10,'Hechos verídicos'),(11,'Historia'),(12,'Intriga'),(13,'Misterio'),(14,'Sucesos'),(15,'Suspenso'),(16,'Tecnología'),(17,'Terror'),(18,'Western'),(19,'N/A');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `generosdisponiblesview`
--

DROP TABLE IF EXISTS `generosdisponiblesview`;
/*!50001 DROP VIEW IF EXISTS `generosdisponiblesview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `generosdisponiblesview` AS SELECT 
 1 AS `idgenero`,
 1 AS `genero`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `generosinter`
--

DROP TABLE IF EXISTS `generosinter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generosinter` (
  `idgenerointer` int NOT NULL AUTO_INCREMENT,
  `idpeli` int DEFAULT NULL,
  `idgenero` int DEFAULT NULL,
  PRIMARY KEY (`idgenerointer`),
  KEY `fk2_idx` (`idpeli`),
  KEY `fk5_idx1` (`idgenero`),
  CONSTRAINT `fk2` FOREIGN KEY (`idpeli`) REFERENCES `peliculas` (`idpeli`),
  CONSTRAINT `fk5` FOREIGN KEY (`idgenero`) REFERENCES `generos` (`idgenero`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generosinter`
--

LOCK TABLES `generosinter` WRITE;
/*!40000 ALTER TABLE `generosinter` DISABLE KEYS */;
INSERT INTO `generosinter` VALUES (1,1,6),(2,2,6),(3,3,3),(4,4,3),(5,5,6),(6,6,9),(7,7,5),(8,8,2),(9,9,2),(10,10,3),(11,11,4),(12,12,4),(13,13,6),(14,14,6),(15,15,6),(16,16,18),(17,17,9),(18,18,1),(19,19,1),(20,20,1),(21,21,4),(22,22,3),(23,23,17),(24,24,1),(25,25,6),(26,26,6),(27,27,1),(28,28,6),(29,29,6),(30,30,6),(31,31,6),(32,32,15),(33,33,6),(34,34,6),(35,35,1),(36,1,10),(37,2,13),(38,3,8),(39,4,8),(40,5,9),(41,6,6),(42,7,15),(43,8,3),(44,9,8),(45,10,8),(46,11,8),(47,12,7),(48,13,7),(49,14,3),(50,15,10),(51,16,3),(52,17,6),(53,18,6),(54,19,9),(55,20,3),(56,21,9),(57,22,15),(58,23,15),(59,24,2),(60,25,11),(61,26,15),(62,27,3),(63,28,15),(64,29,1),(65,30,3),(66,31,3),(67,32,2),(68,33,17),(69,34,10),(70,35,8),(71,1,19),(72,2,9),(73,3,19),(74,4,19),(75,5,14),(76,6,13),(77,7,6),(78,8,1),(79,9,6),(80,10,19),(81,11,9),(82,12,6),(83,13,18),(84,14,19),(85,15,19),(86,16,19),(87,17,16),(88,18,15),(89,19,4),(90,20,15),(91,21,2),(92,22,19),(93,23,8),(94,24,8),(95,25,2),(96,26,12),(97,27,17),(98,28,9),(99,29,2),(100,30,2),(101,31,15),(102,32,9),(103,33,9),(104,34,19),(105,35,3);
/*!40000 ALTER TABLE `generosinter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculas` (
  `idpeli` int NOT NULL AUTO_INCREMENT,
  `poster` varchar(200) DEFAULT NULL,
  `titulo` varchar(100) NOT NULL,
  `resumen` varchar(1000) DEFAULT NULL,
  `temporadas` varchar(50) DEFAULT NULL,
  `trailer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idpeli`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES (1,'http://localhost:3000/posters/1.jpg','The Crown','Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.','4',''),(2,'http://localhost:3000/posters/2.jpg','Riverdale','El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.','5',''),(3,'http://localhost:3000/posters/3.jpg','The Mandalorian','Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.','2','https://www.youtube.com/embed/aOC8E8z_ifw'),(4,'/posters/4.jpg','The Umbrella Academy','La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.','1',''),(5,'/posters/5.jpg','Gambito de Dama','En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.','1',''),(6,'/posters/6.jpg','Enola Holmes','La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.','N/A',''),(7,'/posters/7.jpg','Guasón','Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.','N/A','https://www.youtube.com/embed/zAGVQLHvwOY'),(8,'/posters/8.jpg','Avengers: End Game','Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.','N/A',''),(9,'/posters/9.jpg','Juego de tronos','En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.','8',''),(10,'/posters/10.jpg','The Flash','Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal.','6',''),(11,'/posters/11.jpg','The Big Bang Theory','Leonard y Sheldon son dos físicos que comparten trabajo y apartamento. La serie comienza con la mudanza de Penny, su nueva y atractiva vecina, y hace hincapié en la dificultad de los físicos para relacionarse con personas fuera de su entorno para dar lugar a situaciones cómicas.','12','https://www.youtube.com/embed/WBb3fojgW0Q'),(12,'/posters/12.jpg','Friends','Friends narra las aventuras y desventuras de seis jóvenes de Nueva York: Rachel, Monica, Phoebe, Ross, Chandler y Joey. Ellos forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual cafetería, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.','10',''),(13,'/posters/13.jpg','Anne with an \'E\'','Anne Shirley es una niña huérfana que vive en un pequeño pueblo llamado Avonlea que pertenece a la Isla del Príncipe Eduardo, en el año 1890. Después de una infancia difícil, donde fue pasando de orfanato a hogares de acogida, es enviada por error a vivir con una solterona y su hermano. Cuando cumple 13 años, Anne va a conseguir transformar su vida y el pequeño pueblo donde vive gracias a su fuerte personalidad, intelecto e imaginación. Basada en la inolvidable novela.','2',''),(14,'/posters/14.jpg','Expedientes Secretos \'X\'','Fox Mulder y Dana Scully son dos investigadores del FBI que investigan casos sin resolución ni explicación, ya sea por razones paranormales (espíritus, criaturas extrañas, aliens...) ya porque el gobierno se ha encargado de ocultar todo tipo de pruebas. Cuando Mulder tenía doce años, su hermana pequeña fue secuestrada por unos desconocidos, aunque él cree que, en realidad, fue abducida por extraterrestres. Tras acabar sus estudios en la universidad de Oxford, ingresó en la Academia de Quantico, donde se ganó el apodo de \'siniestro\'','11','https://www.youtube.com/embed/KKziOmsJxzE'),(15,'/posters/15.jpg','Chernobyl','Sigue «la verdadera historia de una de las peores catástrofes provocadas por el hombre y habla de los valientes hombres y mujeres que se sacrificaron para salvar a Europa de un desastre inimaginable. La miniserie se centra en el desgarrador alcance del desastre de la planta nuclear que ocurrió en Ucrania en abril de 1986, revelando cómo y por qué ocurrió, además contando las sorprendentes y notables historias de los héroes que lucharon y cayeron.','1','https://www.youtube.com/embed/s9APLXM9Ei8'),(16,'/posters/16.jpg','Westworld','Westworld\'es una oscura odisea acerca del amanecer de la conciencia artificial y la evolución del pecado. Situada en la intersección del futuro cercano y el pasado reimaginado, explora un mundo donde cada apetito humano, sin importar cuán noble o depravado, puede ser saciado. Está ambientada en un parque temático futurista dirigido por el Dr. Robert Ford (Anthony Hopkins). Las instalaciones cuentan con androides caracterizados del western americano, y gracias a ellos los visitantes pueden introducirse en cualquier tipo de fantasía por muy oscura que sea.','3','https://www.youtube.com/embed/qLFBcdd6Qw0'),(17,'/posters/17.jpg','Halt and Catch Fire','Situada en los inicios de la década de 1980, un visionario ficticio, un ingeniero electrónico y una prodigiosa ingeniera, se alían a una programadora de software para confrontar con las corporaciones informáticas dominantes de la época. El Personal de la firma y sus socios de negocio, comenzarán una carrera que cambiará la cultura en el Estado de Texas, cuna de las empresas de tecnología, casi de la misma forma que lo es hoy Silicon Valey.   Esta historia ficticia emula el trabajo realizado, en su momento, por la firma Compaq, cuando clonó el BIOS de las Computadoras Personales IBM, dando vida así al económico mercado de los clones. Mostrando también, a lo largo de sus 4 temporadas, el nacimiento de la arquitectura abierta de hardware, los videojuegos online, las salas de chat y de trueque de productos físicos, los BBS, y las primeras nubes computacionales, hasta la llegada de Internet (sin dejar afuera la guerra de los web browsers).','4','https://www.youtube.com/embed/pWrioRji60A'),(18,'/posters/18.jpg','Ava','Ava es una mortífera asesina a sueldo que trabaja para una organización de operaciones encubiertas, que viaja por todo el mundo acabando con aquellos objetivos que nadie más puede derribar. Cuando uno de sus encargos sale mal, Ava tendrá que luchar por una vida.','N/A',''),(19,'/posters/19.jpg','Aves de presa y la fantabulosa emancipación de una Harley Quinn','Después de separarse de Joker, Harley Quinn y otras tres heroínas (Canario Negro, Cazadora y Renée Montoya) unen sus fuerzas para salvar a una niña (Cassandra Cain) del malvado rey del crimen Máscara Negra.','N/A',''),(20,'/posters/20.jpg','Archivo','2038: George Almore está trabajando en una verdadera IA equivalente a la humana. Su último prototipo está casi listo. Esta fase sensible también es la más arriesgada. Especialmente porque tiene un objetivo que debe ocultarse a toda costa: reunirse con su esposa muerta.','N/A','https://www.youtube.com/embed/VHSoCnDioAo'),(21,'/posters/21.jpg','Jumanji - The next level','Las aventuras continúan en el fantástico mundo del video juego Jumanji, donde nada es lo que parece. En esta ocasión, los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia y habilidades. Pero, ¿dónde está el resto de la gente?','N/A','https://www.youtube.com/embed/rBxcF-r9Ibs'),(22,'/posters/22.jpg','3022','La película está ambientada en una estación espacial en el futuro. La tripulación sufre un estrés traumático y considera abandonar su misión después de observar lo que creen que es la destrucción de la Tierra. La película se muestra como una serie de flashbacks y flash-forward.','N/A','https://www.youtube.com/embed/AGQ7OkmIx4Q'),(23,'/posters/23.jpg','IT - Capítulo 2','En este segundo capitulo Han pasado 27 años desde que el \'Club de los Perdedores\', formado por Bill, Berverly, Richie, Ben, Eddie, Mike y Stanley, se enfrentaran al macabro y despiadado Pennywise (Bill Skarsgård). En cuanto tuvieron oportunidad, abandonaron el pueblo de Derry, en el estado de Maine, que tantos problemas les había ocasionado. Sin embargo, ahora, siendo adultos, parece que no pueden escapar de su pasado. Todos deberán enfrentarse de nuevo al temible payaso para descubrir si de verdad están preparados para superar sus traumas de la infancia.','N/A','https://www.youtube.com/embed/hZeFeYSmBcg'),(24,'/posters/24.jpg','Pantera Negra','T’Challa (Chadwick Boseman) regresa a su hogar en la apartada nación africana de Wakanda para servir como líder de su país. Tras suceder a su padre en el trono, pasa a convertirse en Pantera Negra, una sigilosa criatura de la noche, con agudos sentidos felinos y otras habilidades como súper fuerza e inteligencia, agilidad, estrategia o maestro del combate sin armas. Es bajo el liderazgo de T’Challa como Wakanda consigue convertirse en una de las naciones más ricas y tecnológicamente avanzadas del planeta.','N/A','https://www.youtube.com/embed/BE6inv8Xh4A'),(25,'/posters/25.jpg','Contra lo imposible (Ford versus Ferrari)','Los ganadores del Premio de la Academia® Matt Damon y Christian Bale protagonizan CONTRA LO IMPOSIBLE, basada en la historia real del visionario diseñador americano de automóviles Carroll Shelby (Damon) y el intrépido piloto británico Ken Miles (Bale). Juntos construyen un nuevo coche de carreras para Ford Motor Company y así enfrentar a Enzo Ferrari en las 24 Horas de Le Mans en Francia en 1966.','N/A','https://www.youtube.com/embed/SOVb0-2g1Q0'),(26,'/posters/26.jpg','Centígrados','Una joven pareja estadounidense viaja a las montañas árticas de Noruega. Después de detenerse durante una tormenta de nieve, se despiertan atrapados en su SUV, enterrados bajo capas de nieve y hielo.','N/A',''),(27,'/posters/27.jpg','DOOM: Aniquilación','Doom: Aniquilación sigue a un grupo de marines espaciales que han respondido a una llamada de alerta de una base en la luna marciana, solo para descubrir que ha sido tomada por criaturas demoníacas que amenazan con desatar el infierno en la tierra.','N/A','https://www.youtube.com/embed/nat3u3gAVLE'),(28,'/posters/28.jpg','Contagio','De repente, sin saber cuál es su origen, aunque todo hace sospechar que comienza con el viaje de una norteamericana a un casino de Hong Kong, un virus mortal comienza a propagarse por todo el mundo. En pocos días, la enfermedad empieza a diezmar a la población. El contagio se produce por mero contacto entre los seres humanos. Un thriller realista y sin efectos especiales sobre los efectos de una epidemia.','N/A','https://www.youtube.com/embed/4sYSyuuLk5g'),(29,'/posters/29.jpg','Viuda Negra','Primera pelicula individual de la Viuda Negra en el universo cinematografico de Marvel, contando su historia desde que se inició como doble agente rusa, su niñez, sus misiones, y su actualidad, después de Avengers.','N/A','https://www.youtube.com/embed/BIn8iANwEog'),(30,'/posters/30.jpg','The Martian','Durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata dando por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de irse pero él ha sobrevivido. Está solo y sin apenas recursos en el planeta. Con muy pocos medios deberá recurrir a sus conocimientos, su sentido del humor y un gran instinto de supervivencia para lograr sobrevivir y comunicar a la Tierra que todavía está vivo esperando que acudan en su rescate.','N/A','https://www.youtube.com/embed/XvB58bCVfng'),(31,'/posters/31.jpg','Ex-Machina','Un programador multimillonario selecciona a Caleb, un joven empleado de su empresa, para que pase una semana en un lugar remoto con el objetivo de que participe en un test en el que estará involucrada su última creación: un robot-mujer en el que inteligencia artificial lo es todo.','N/A','https://www.youtube.com/embed/XRYL5spvEcI'),(32,'/posters/32.jpg','Jurassic World','Veintidós años después de lo ocurrido en Jurassic Park, la isla Nublar ha sido transformada en un enorme parque temático, Jurassic Wold, con versiones «domesticadas» de algunos de los dinosaurios más conocidos. Cuando todo parece ir sobre ruedas y ser el negocio del siglo, un nuevo dinosaurio de especie desconocida, pues ha sido creado manipulando genéticamente su ADN, y que resulta ser mucho más inteligente de lo que se pensaba, se escapa de su recinto y comienza a causar estragos entre los visitantes del Parque.','N/A',''),(33,'/posters/33.jpg','Soy leyenda','Años después de que una plaga mate a la mayoría de la humanidad y transforme al resto en monstruos, el único superviviente en la ciudad de Nueva York lucha valientemente para encontrar una cura.','N/A','https://www.youtube.com/embed/dtKMEAXyPkg'),(34,'/posters/34.jpg','El primer hombre en la luna','Cuenta la historia de la misión de la NASA que llevó al primer hombre a la luna, centrada en Neil Armstrong (interpretado por Ryan Gosling) y el periodo comprendido entre los años 1961 y 1969. Un relato en primera persona, basado en la novela de James R. Hansen, que explora el sacrificio y el precio que representó, tanto para Armstrong como para Estados Unidos, una de las misiones más peligrosas de la historia.','N/A',''),(35,'/posters/35.jpg','Titanes del pacífico - La insurrección','Han pasado 10 años tras la primera invasión que sufrió la humanidad, pero la lucha aún no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales, que emergen desde un portal interdimensional con el objetivo de destruir a la raza humana. Ante esta nueva amenaza, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neuronal que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost, tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro.','N/A','');
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repartosinter`
--

DROP TABLE IF EXISTS `repartosinter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repartosinter` (
  `idrep` int NOT NULL AUTO_INCREMENT,
  `idpeli` int DEFAULT NULL,
  `idactor` int DEFAULT NULL,
  PRIMARY KEY (`idrep`),
  KEY `fk1_idx` (`idpeli`),
  KEY `fk6_idx` (`idactor`),
  CONSTRAINT `fk1` FOREIGN KEY (`idpeli`) REFERENCES `peliculas` (`idpeli`),
  CONSTRAINT `fk6` FOREIGN KEY (`idactor`) REFERENCES `actores` (`idactor`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repartosinter`
--

LOCK TABLES `repartosinter` WRITE;
/*!40000 ALTER TABLE `repartosinter` DISABLE KEYS */;
INSERT INTO `repartosinter` VALUES (1,1,69),(2,2,167),(3,3,151),(4,4,97),(5,5,191),(6,6,21),(7,7,158),(8,8,56),(9,9,36),(10,10,84),(11,11,149),(12,12,5),(13,13,131),(14,14,4),(15,15,89),(16,16,164),(17,17,145),(18,18,34),(19,19,171),(20,20,127),(21,21,106),(22,22,41),(23,23,181),(24,24,23),(25,25,8),(26,26,173),(27,27,125),(28,28,43),(29,29,105),(30,30,50),(31,31,198),(32,32,49),(33,33,184),(34,34,80),(35,35,24),(36,1,38),(37,2,44),(38,3,201),(39,4,29),(40,5,27),(41,6,32),(42,7,54),(43,8,64),(44,9,93),(45,10,197),(46,11,74),(47,12,45),(48,13,103),(49,14,57),(50,15,180),(51,16,142),(52,17,130),(53,18,124),(54,19,129),(55,20,137),(56,21,91),(57,22,199),(58,23,34),(59,24,7),(60,25,50),(61,26,159),(62,27,2),(63,28,50),(64,29,163),(65,30,34),(66,31,78),(67,32,162),(68,33,25),(69,34,71),(70,35,58),(71,1,182),(72,2,133),(73,3,174),(74,4,166),(75,5,132),(76,6,35),(77,7,14),(78,8,175),(79,9,196),(80,10,148),(81,11,47),(82,12,117),(83,13,194),(84,14,160),(85,15,200),(86,16,209),(87,17,52),(88,18,66),(89,19,60),(90,20,104),(91,21,20),(92,22,62),(93,23,86),(94,24,144),(95,25,9),(96,26,186),(97,27,16),(98,28,68),(99,29,87),(100,30,205),(101,31,101),(102,32,113),(103,33,190),(104,34,37),(105,35,187),(106,1,134),(107,2,143),(108,3,10),(109,4,179),(110,5,100),(111,6,22),(112,7,40),(113,8,95),(114,9,88),(115,10,153),(116,11,94),(117,12,177),(118,13,116),(119,14,152),(120,15,170),(121,16,192),(122,17,19),(123,18,39),(124,19,185),(125,20,67),(126,21,76),(127,22,122),(128,23,128),(129,24,83),(130,25,121),(131,26,12),(132,27,123),(133,28,119),(134,29,65),(135,30,51),(136,31,138),(137,32,48),(138,33,136),(139,34,33),(140,35,195),(141,1,115),(142,2,157),(143,3,85),(144,4,75),(145,5,161),(146,6,150),(147,7,46),(148,8,105),(149,9,55),(150,10,118),(151,11,141),(152,12,156),(153,13,15),(154,14,26),(155,15,28),(156,16,90),(157,17,99),(158,18,53),(159,19,155),(160,20,206),(161,21,6),(162,22,70),(163,23,139),(164,24,72),(165,25,110),(166,26,210),(167,27,202),(168,28,207),(169,29,203),(170,30,154),(171,31,107),(172,32,189),(173,33,169),(174,34,188),(175,35,114),(176,1,22),(177,2,3),(178,3,63),(179,4,146),(180,5,61),(181,6,1),(182,7,204),(183,8,168),(184,9,42),(185,10,30),(186,11,165),(187,12,120),(188,13,102),(189,14,92),(190,15,140),(191,16,96),(192,17,31),(193,18,82),(194,19,135),(195,20,109),(196,21,108),(197,22,77),(198,23,176),(199,24,111),(200,25,17),(201,26,210),(202,27,112),(203,28,59),(204,29,98),(205,30,13),(206,31,178),(207,32,172),(208,33,183),(209,34,73),(210,35,79),(211,1,210),(212,2,210),(213,3,210),(214,4,210),(215,5,210),(216,6,210),(217,7,210),(218,8,210),(219,9,210),(220,10,210),(221,11,18),(222,12,210),(223,13,210),(224,14,210),(225,15,210),(226,16,210),(227,17,210),(228,18,210),(229,19,210),(230,20,210),(231,21,210),(232,22,210),(233,23,210),(234,24,210),(235,25,210),(236,26,210),(237,27,210),(238,28,147),(239,29,208),(240,30,126),(241,31,11),(242,32,81),(243,33,193),(244,34,210),(245,35,210);
/*!40000 ALTER TABLE `repartosinter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `catalogoview`
--

/*!50001 DROP VIEW IF EXISTS `catalogoview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `catalogoview` AS select `pelis`.`idpeli` AS `idpeli`,`pelis`.`poster` AS `poster`,`pelis`.`titulo` AS `titulo`,`cat`.`categoria` AS `Categoria`,(select group_concat(distinct `gen`.`genero` separator ',') from (`generosinter` `genin` join `generos` `gen` on((`genin`.`idgenero` = `gen`.`idgenero`))) where (`genin`.`idpeli` = `pelis`.`idpeli`)) AS `Genero`,`pelis`.`resumen` AS `resumen`,`pelis`.`temporadas` AS `temporadas`,(select group_concat(distinct `act`.`nombreyapellido` separator ',') from (`repartosinter` `repin` join `actores` `act` on((`repin`.`idactor` = `act`.`idactor`))) where (`repin`.`idpeli` = `pelis`.`idpeli`)) AS `Reparto`,`pelis`.`trailer` AS `trailer` from ((`peliculas` `pelis` join `categoriasinter` `catin` on((`pelis`.`idpeli` = `catin`.`idpeli`))) join `categorias` `cat` on((`catin`.`idcategoria` = `cat`.`idcategoria`))) group by `pelis`.`idpeli`,`cat`.`categoria` order by `pelis`.`idpeli` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `categoriasdisponiblesview`
--

/*!50001 DROP VIEW IF EXISTS `categoriasdisponiblesview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `categoriasdisponiblesview` AS select group_concat(`cat`.`categoria` separator ', ') AS `Categorias Disponibles` from `categorias` `cat` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `generosdisponiblesview`
--

/*!50001 DROP VIEW IF EXISTS `generosdisponiblesview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `generosdisponiblesview` AS select `gen`.`idgenero` AS `idgenero`,`gen`.`genero` AS `genero` from `generos` `gen` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-20  9:43:26
