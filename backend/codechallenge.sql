-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2024 at 08:26 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codechallenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `degree`
--

CREATE TABLE `degree` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `degree`
--

INSERT INTO `degree` (`id`, `name`) VALUES
(1, 'Bachelor'),
(2, 'Masters'),
(3, 'PhD');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `university_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `name`, `university_id`) VALUES
(1, 'Science & Technology', 1),
(2, 'Arts and Sciences', 1),
(3, 'Engineering', 2),
(4, 'Management', 2),
(5, 'Humanities ', 2),
(6, 'Letters and Science', 3);

-- --------------------------------------------------------

--
-- Table structure for table `major`
--

CREATE TABLE `major` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `faculty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `major`
--

INSERT INTO `major` (`id`, `name`, `faculty_id`) VALUES
(1, 'Sociology', 6),
(2, 'Molecular and Cell Biology', 6),
(3, 'Management Studies', 4),
(4, 'Finance', 4),
(5, 'Entrepreneurship and Innovation', 4),
(6, 'Mechanical Engineering', 3),
(7, 'Aerospace Engineering', 3),
(8, 'Psychology', 2);

-- --------------------------------------------------------

--
-- Table structure for table `major_degree`
--

CREATE TABLE `major_degree` (
  `id` int(11) NOT NULL,
  `tuition` int(11) NOT NULL,
  `living_cost` int(11) NOT NULL,
  `visa_requirements` text NOT NULL,
  `duration` int(11) NOT NULL,
  `entry_requirements` text NOT NULL,
  `intakes` int(11) NOT NULL,
  `major_id` int(11) NOT NULL,
  `degree_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `major_degree`
--

INSERT INTO `major_degree` (`id`, `tuition`, `living_cost`, `visa_requirements`, `duration`, `entry_requirements`, `intakes`, `major_id`, `degree_id`) VALUES
(1, 5000, 2500, 'Valid passport,SEVIS,TOEFL,IELTS', 3, 'High school diploma or equivalent,Personal Statement or Statement of Purpose', 200, 1, 1),
(2, 7000, 2500, 'Valid passport,SEVIS,TOEFL,IELTS', 3, 'High school diploma or equivalent,Personal Statement or Statement of Purpose', 200, 1, 2),
(3, 10000, 2500, 'SEVIS,TOEFL,IELTS', 3, 'work experience', 200, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

CREATE TABLE `university` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `description` text NOT NULL,
  `logo` text NOT NULL,
  `cover_image` text NOT NULL,
  `languages` varchar(255) NOT NULL,
  `application_deadline` varchar(25) NOT NULL,
  `ranking` int(11) NOT NULL,
  `accepting_applications` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `university`
--

INSERT INTO `university` (`id`, `name`, `country`, `city`, `summary`, `description`, `logo`, `cover_image`, `languages`, `application_deadline`, `ranking`, `accepting_applications`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Harvard', 'USA', 'New York', '{\"Founded\":1636,\"Departments\":\"1\"}', '\nHarvard University, founded in 1636, is one of the oldest and most prestigious universities in the United States. Located in Cambridge, Massachusetts, Harvard has played a pivotal role in shaping academia and boasts a distinguished history of producing influential leaders, scholars, and Nobel laureates across various disciplines. Renowned for its rigorous academic programs and world-class faculty, Harvard stands as a symbol of academic excellence globally.', 'https://www.shorttermprograms.com/images/cache/600_by_314/uploads/institution-logos/harvard-university.png', 'https://www.isbos.org/uploaded/themes/2015_map/images/Boston_Landmarks/HarvardUniversity.jpg', 'english', '30-01-2024', 1, 1, '2024-01-04 21:01:00', '2024-01-04 21:01:00', NULL),
(2, 'Accademia Italiana', 'Italy', 'Florence', '{\"Founded\":1970,\"Departments\":\"1\"}', 'Founded in 1984, Accademia Italiana, with locations in Florence and Rome, is one of the most prestigious university-level institutions for fashion, design and photography.\r\n\r\nThose who approach our Institute are always motivated by a great energy, and by the desire to direct and exploit their own creative capacities.\r\n\r\nHere at Accademia Italiana, they are searching for the best place to develop their creative potential. Here they find the perfect setting for professional growth and specialization in the various design, artistic and linguistic fields.\r\n\r\nUpon completion of the study period each student is ready to begin a professional career.\r\n\r\nThe thousands of students that have passed through Accademia Italiana, from its beginnings up to today, and the hundreds of professionals that over the years have come into contact with our Institute have created a constant influx of ideas that create a continual flow of vitality, movement and strength.\r\n\r\nAccademia Italiana moves into the future full of this energy, presenting itself today as one of the most qualified institutes of artistic, professional and linguistic training.\r\n\r\nToday more than ever the particular quality of Accademia emerges in our special methods of dealing with the various disciplines. In our academic programs we have always sought to combine the past with the future, the historic traditions, with the rapid evolution of new technologies.\r\n\r\nOur classroom and laboratory experience is designed to give students real world contacts and real world, hands on, practical experience. Our links with the working world allow our students to verify their knowledge in a tangible way.\r\n\r\nImmersed in an international environment the students develop the capacity to confront the various cultures, enriching and widening their horizons, recognizing that in the future they will live in a global society, the only one possible in tomorrow\'s world, and it is into this reality that they will be able to make their own creative, professional and cultural contribution.', 'https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/Accademia_italiana_Logo', 'https://studyabroad.arcadia.edu/files/programs/itl_florence_basilica_duomo_rooftops_lo.jpg', 'English,Italian', '2024-6-30', 2, 1, '2024-01-04 20:37:12', '2024-01-04 20:37:12', NULL),
(3, 'Brest Business School', 'France', 'Brest', '{\"Founded\":1962,\"Departments\":\"1\"}', 'Brest Business School, also called ESC Bretagne Brest, France, is a French business School in the city of Brest in western France. Founded in 1962, Brest BS provides business and management courses to 900 students. Currently, the school offers seven different programmes both in French and in English.', 'https://my.aacsb.edu/Portals/0/assets/images/contact/Brest%20Business%20School.png', 'https://brest-bs.com/wp-content/uploads/2018/02/DSC_0054-HDR3-1024x680.jpg', 'English,French', '2025-10-1', 3, 1, '2024-01-04 20:45:09', '2024-01-04 20:45:09', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `degree`
--
ALTER TABLE `degree`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_faculty` (`university_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_major` (`faculty_id`);

--
-- Indexes for table `major_degree`
--
ALTER TABLE `major_degree`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_majorDegree_majorId` (`major_id`),
  ADD KEY `fk_majorDegree_degreeId` (`degree_id`);

--
-- Indexes for table `university`
--
ALTER TABLE `university`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `degree`
--
ALTER TABLE `degree`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `major_degree`
--
ALTER TABLE `major_degree`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `university`
--
ALTER TABLE `university`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `fk_faculty` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`);

--
-- Constraints for table `major`
--
ALTER TABLE `major`
  ADD CONSTRAINT `fk_major` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`);

--
-- Constraints for table `major_degree`
--
ALTER TABLE `major_degree`
  ADD CONSTRAINT `fk_majorDegree_degreeId` FOREIGN KEY (`degree_id`) REFERENCES `degree` (`id`),
  ADD CONSTRAINT `fk_majorDegree_majorId` FOREIGN KEY (`major_id`) REFERENCES `major` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
