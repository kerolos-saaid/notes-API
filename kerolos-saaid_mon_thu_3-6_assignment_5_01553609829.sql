-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2023 at 05:16 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kerolos-saaid_mon&thu_3-6_assignment_5_01553609829`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(5000) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`, `userID`) VALUES
(1, 'updated title', 'Today, I started my journey through the cosmos. The vastness of space fills me with wonder and excitement. I can\'t wait to discover new galaxies and unravel the mysteries of the universe.', 1),
(2, 'updated title', 'I decided to try a new recipe today, a fusion of flavors from different cuisines. The combination of spices and ingredients created a unique and delicious dish. I\'ll definitely be making this again!', 1),
(4, 'Coding Breakthrough', 'After hours of debugging, I finally cracked the code! The solution to the complex algorithm problem came to me in a moment of clarity. Persistence pays off in the world of programming.', 4),
(5, 'Book Recommendation', 'Just finished reading an incredible book that transported me to a different time and place. The characters were so vivid, and the story kept me captivated until the very last page. Highly recommend!', 5),
(6, 'Beach Bonfire', 'Spent a magical evening by the beach, surrounded by friends and the warm glow of a bonfire. The sound of crashing waves and laughter filled the air. Moments like these create lifelong memories.', 6),
(7, 'Artistic Expression', 'Picked up a paintbrush today and let my creativity flow onto the canvas. Painting is such a therapeutic and expressive form of art. Each stroke brings me closer to capturing my emotions.', 7),
(8, 'Volunteering Experience', 'Volunteered at a local shelter today, lending a helping hand to those in need. The gratitude and smiles on people\'s faces reminded me of the power of compassion. Making a difference in someone\'s life is truly rewarding.', 8),
(9, 'Morning Meditation', 'Started the day with a peaceful meditation session. The tranquility and mindfulness brought clarity to my thoughts. Ready to embrace the day with a calm and focused mind.', 9),
(10, 'Starlit Concert', 'Attended an outdoor concert under the stars last night. The music echoed through the night sky, creating a magical atmosphere. Music truly has the power to unite people and uplift spirits.', 10),
(13, 'this is updated title', 'this is updated content', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`) VALUES
(1, 'Kerolos', 'johndoe@example.com', 'password1', 20),
(4, 'Emily Davis', 'emilydavis@example.com', 'password4', 32),
(5, 'Michael Wilson', 'michaelwilson@example.com', 'password5', 35),
(6, 'Sarah Anderson', 'sarahanderson@example.com', 'password6', 27),
(7, 'Matthew Taylor', 'matthewtaylor@example.com', 'password7', 29),
(8, 'Olivia Martinez', 'oliviamartinez@example.com', 'password8', 31),
(9, 'Daniel Thomas', 'danielthomas@example.com', 'password9', 26),
(10, 'Sophia Garcia', 'sophiagarcia@example.com', 'password10', 33),
(11, 'William Rodriguez', 'williamrodriguez@example.com', 'password11', 27),
(12, 'Ava Lopez', 'avalopez@example.com', 'password12', 29),
(13, 'James Lee', 'jameslee@example.com', 'password13', 31),
(14, 'Mia Harris', 'miaharris@example.com', 'password14', 28),
(15, 'Benjamin Clark', 'benjaminclark@example.com', 'password15', 30),
(16, 'Abigail Lewis', 'abigaillewis@example.com', 'password16', 25),
(17, 'Henry Young', 'henryyoung@example.com', 'password17', 34),
(18, 'Ella Walker', 'ellawalker@example.com', 'password18', 26),
(19, 'Alexander Hall', 'alexanderhall@example.com', 'password19', 31),
(20, 'Sofia Allen', 'sofiaallen@example.com', 'password20', 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_U_N` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `FK_U_N` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
