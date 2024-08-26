-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 29 déc. 2023 à 10:51
-- Version du serveur : 10.6.12-MariaDB-0ubuntu0.22.04.1
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nodejsx`
--

-- --------------------------------------------------------

--
-- Structure de la table `avertissements`
--

CREATE TABLE `avertissements` (
  `id` int(11) NOT NULL,
  `idUser` int(25) NOT NULL,
  `raison` longtext NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Structure de la table `boutique`
--

CREATE TABLE `boutique` (
  `id` int(11) NOT NULL,
  `categorieId` int(11) NOT NULL,
  `nom` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `actif` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `boutique`
--

INSERT INTO `boutique` (`id`, `categorieId`, `nom`, `image`, `actif`) VALUES
(19, 2, 'Amazon', 'images_1667069079962.png', 1),
(20, 2, 'Nintendo', 'images_1667069101221.png', 1),
(21, 2, 'Neosurf', 'images_1667069187424.png', 1),
(22, 2, 'Itunes', 'images_1667069294302.png', 1),
(23, 4, 'PSN', 'images_1667069335304.png', 1),
(25, 2, 'Twitch', 'images_1667069404764.png', 1),
(26, 2, 'Spotify', 'images_1667069425924.png', 1),
(27, 4, 'Xbox', 'images_1667069441818.png', 1),
(28, 4, 'Xbox live', 'images_1667069528646.png', 1),
(29, 2, 'Netflix', 'images_1667069742681.png', 1),
(30, 2, 'Google play', 'images_1667069767328.png', 1),
(31, 2, 'Zalando', 'images_1667069787721.png', 1),
(32, 1, 'Virement bancaire', 'images_1667069869062.png', 1),
(33, 1, 'paypal ', 'images_1667069905304.png', 1);

-- --------------------------------------------------------

--
-- Structure de la table `boutiqueCategorie`
--

CREATE TABLE `boutiqueCategorie` (
  `id` int(11) NOT NULL,
  `nom` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `boutiqueCategorie`
--

INSERT INTO `boutiqueCategorie` (`id`, `nom`) VALUES
(1, 'Paiement'),
(2, 'Carte-Cadeaux'),
(3, 'Test'),
(4, 'Carte jeux & apps');

-- --------------------------------------------------------

--
-- Structure de la table `boutiqueMontant`
--

CREATE TABLE `boutiqueMontant` (
  `id` int(11) NOT NULL,
  `boutiqueId` int(11) NOT NULL,
  `montant` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `boutiqueMontant`
--

INSERT INTO `boutiqueMontant` (`id`, `boutiqueId`, `montant`) VALUES
(2, 2, 10.00),
(3, 2, 20.00),
(6, 4, 10.00),
(7, 4, 20.00),
(8, 8, 10.00),
(10, 5, 10.00),
(11, 5, 20.00),
(12, 6, 10.00),
(13, 6, 20.00),
(14, 7, 10.00),
(15, 7, 20.00),
(16, 5, 50.00),
(17, 3, 15.00),
(18, 3, 25.00),
(19, 3, 50.00),
(20, 6, 5.00),
(21, 6, 15.00),
(22, 6, 25.00),
(23, 6, 30.00),
(26, 9, 20.00),
(27, 9, 30.00),
(28, 9, 40.00),
(29, 9, 50.00),
(30, 10, 10.00),
(31, 10, 20.00),
(32, 10, 25.00),
(33, 10, 30.00),
(35, 10, 5.00),
(36, 11, 5.00),
(37, 11, 10.00),
(38, 11, 15.00),
(39, 11, 20.00),
(40, 11, 1.00),
(41, 11, 2.00),
(42, 11, 3.00),
(44, 12, 1.00),
(45, 12, 5.00),
(46, 12, 10.00),
(47, 12, 10.00),
(48, 12, 20.00),
(49, 13, 1.30),
(50, 14, 1.50),
(51, 15, 1.00),
(52, 12, 0.90),
(53, 1, 2.00),
(54, 1, 5.00),
(55, 33, 10.00),
(56, 32, 45.00),
(57, 19, 10.00),
(58, 32, 20.00),
(59, 33, 20.00),
(60, 33, 30.00),
(61, 33, 40.00),
(62, 33, 50.00),
(63, 32, 30.00),
(64, 32, 10.00);

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id` int(11) NOT NULL,
  `userID` varchar(200) NOT NULL,
  `shopID` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `code_promo` varchar(20) DEFAULT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id`, `userID`, `shopID`, `status`, `amount`, `code_promo`, `date`) VALUES
(1, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 1, 'ACCEPTED', 5, NULL, '10/29/2022'),
(2, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 12, 'ACCEPTED', 20, NULL, '10/29/2022'),
(3, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'ACCEPTED', 0, NULL, '10/30/2022'),
(4, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 19, 'ACCEPTED', 0, 'sdfsfsdfsfsdfds', '10/30/2022'),
(5, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'ACCEPTED', 20, NULL, '10/30/2022'),
(6, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 32, 'ACCEPTED', 10, NULL, '10/30/2022'),
(7, '6c0f8323-5059-4de0-98da-1dca3bf5fbbd', 19, 'ACCEPTED', 10, '1234', '10/31/2022'),
(8, '6c0f8323-5059-4de0-98da-1dca3bf5fbbd', 19, 'ACCEPTED', 0, 'ddddd', '10/31/2022'),
(9, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 19, 'ACCEPTED', 10, 'aaaaaaaaa', '10/31/2022'),
(10, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 32, 'ACCEPTED', 45, NULL, '10/31/2022'),
(11, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'ACCEPTED', 20, NULL, '10/31/2022'),
(12, '6c0f8323-5059-4de0-98da-1dca3bf5fbbd', 19, 'ACCEPTED', 10, 'rara1234', '10/31/2022'),
(13, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'ACCEPTED', 20, NULL, '10/31/2022'),
(14, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'ACCEPTED', 20, NULL, '10/31/2022'),
(15, 'ea95b12d-0d67-4ca1-877e-e41932c82e4b', 19, 'ACCEPTED', 10, '787878', '11/1/2022'),
(16, '436b39e1-aaa4-41fb-8335-056c2b6c6bec', 33, 'PENDING', 10, NULL, '11/1/2022'),
(17, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 33, 'REFUSED', 20, NULL, '9/22/2023'),
(18, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 32, 'PENDING', 20, NULL, '9/22/2023'),
(19, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'REFUSED', 10, NULL, '9/22/2023'),
(20, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'REFUSED', 10, NULL, '9/22/2023'),
(21, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'PENDING', 10, NULL, '12/28/2023'),
(22, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'PENDING', 10, NULL, '12/28/2023'),
(23, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'PENDING', 10, NULL, '12/28/2023'),
(24, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 19, 'PENDING', 10, NULL, '12/28/2023');

-- --------------------------------------------------------

--
-- Structure de la table `connectes`
--

CREATE TABLE `connectes` (
  `ip` varchar(250) NOT NULL,
  `timestamp` varchar(250) NOT NULL,
  `idUser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `connectes`
--

INSERT INTO `connectes` (`ip`, `timestamp`, `idUser`) VALUES
('90.2.78.60', '1662749240', 'Q84mpalZOx3JlaAS2cmk1gZNn');

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `countries`
--

INSERT INTO `countries` (`id`, `code`) VALUES
(2, '');

-- --------------------------------------------------------

--
-- Structure de la table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `idcoupon` varchar(50) NOT NULL,
  `typecoupon` varchar(32) NOT NULL DEFAULT 'Code',
  `nom` varchar(250) NOT NULL,
  `url` varchar(250) NOT NULL,
  `code` varchar(250) NOT NULL,
  `description` mediumtext NOT NULL,
  `description2` mediumtext NOT NULL,
  `pays` varchar(250) NOT NULL,
  `valid` int(10) NOT NULL DEFAULT 0,
  `actif` int(10) NOT NULL DEFAULT 0,
  `dateDebut` datetime DEFAULT NULL,
  `dateFin` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `coupons`
--

INSERT INTO `coupons` (`id`, `idcoupon`, `typecoupon`, `nom`, `url`, `code`, `description`, `description2`, `pays`, `valid`, `actif`, `dateDebut`, `dateFin`, `image`) VALUES
(1, '', 'coupon', 'Coupon de réduction pour le site materiel.net', 'https://materiel.net/', 'SH50', 'Bénefissiez d\'une réduction de 50% sur votre achat dans la boutique téléphone sur toutes les marques.', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/JFzbHAQIgU4QeF1Z54YT8qFaURZb9rdxSal.jpg'),
(2, '', 'coupon', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', 'gfdgdfgdfgd', 'nvnvbnbnb,bn,n;,n,:,;:!,!:!;:!,vn,v,,bn,bn,n,nv;nlkjhkghkhjkhjkhjkhjkhjn,;,n;n,;n,;,n;', '', 'France', 0, 0, '2019-11-23 00:00:00', '2019-11-30 00:00:00', '../images/coupon/KKMQpTnvQ4lgDB8sfZRK2dJXmXB9IbLMPB8.jpg'),
(3, '', 'coupon', 'JewelCandle', 'https://www.jewelcandle.fr/', 'COLLIERCADEAU', 'Un collier en cadeau dès 29,95 $ d\'achats', '', 'FR', 0, 0, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/RNDe2QYSg57Qec9VcjJszkjHE8uhRwYpM34.jpg'),
(4, '', 'coupon', 'Atlas For Men', 'https://www.atlasformen.fr/?utm_source=paypal&amp;utm_medium=display&amp;utm_campaign=espace_shopping', '17675', 'Jusqu\'à  60% de réduction chez Atlas For Men + la livraison gratuite', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/7S5FpFekfi4hpxbguiCU2GVftMF9niFq7Lt.png'),
(5, '', 'coupon', 'Le Jouet Français', 'https://www.lejouetfrancais.fr/', 'PAYPAL19', 'Le Jouet Français : confiance et éveil pour nos petits. 10% de réduction sur tout le site.', '', 'FR', 0, 0, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/CHA3liNKYzXcs7CCna7l1guw1DZCoNeTSnU.png'),
(6, '', 'coupon', 'Friendly Frenchy', 'https://www.friendlyfrenchy.fr/fr/', 'FRIENDLYPYPL', 'Friendly Frenchy : les coquillages qui font des lunettes. 20% de réduction sur tout le site.', '', 'FR', 0, 0, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/BIEhDy4L2zqiEvnRpnwKGgeJ29J5BLkkqwv.jpg'),
(7, '', 'coupon', 'Ventealapropriete.com', 'https://www.ventealapropriete.com/ventes-privees/portail-ventes.asp?ventetype=1&amp;tk=4595&amp;utm_source=PayPal', 'PAYPAL20', '20â‚¬ de rÃ©duction chez Ventealapropriete.com', '', 'FR', 0, 0, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/ROlmmA7rO8PpWQTJjtMOR2Fxtkfn6GhD3vu.png'),
(8, '', 'coupon', 'Mister Auto', 'http://www.mister-auto.com/', 'PAYPAL5', '5% de remise dÃ¨s 49â‚¬ d\'achat', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/xwpE3OIrVkB4ycZTQZubQQVwoyK9GrSYj9U.png'),
(9, '', 'printable', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', 'd6d', 'fdgfdgfd', '', 'fr', 0, 0, '2019-11-24 00:00:00', '2019-11-30 00:00:00', '../images/coupon/DtYlRzX6CwG6no1G2WKsAiXYjffjMQJOANn.png'),
(10, '', 'coupon', 'Fauchon', 'https://www.fauchon.com/fr/fauchon-evenement/?utm_source=paypal&amp;utm_medium=referral&amp;utm_campaign=offrepaypal', 'PAYPAL19', 'Profitez de 10% de rÃ©duction, dÃ¨s 35 â‚¬ dâ€™achat chez Fauchon', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/pEfcNgpzXPdtmhST4TDIwSVGbJzqxO7cOtg.jpg'),
(11, '', 'coupon', 'Francois', 'https://img.pngio.com/12-error-iconpng-64x64-images-error-icon-64x64-pixel-icons-and-error-png-512_512.png', 'Paye tes 100â‚¬', 'En attente de paiement de ma facture. !!!', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/a27yWlkxEpHSm8OoEX5qwpkm2rxDcomU7Us.png'),
(12, '', 'coupon', 'Ski Planet', 'https://www.ski-planet.com/', 'PAYPAL20', '-20â‚¬ de remise sur Ski Planet', '', 'FR', 0, 1, '2019-11-01 00:00:00', '2020-01-01 00:00:00', '../images/coupon/ecK9DiCzEr4hgZKi516Gy4cIXLJD3157nge.jpg'),
(13, '', 'discount', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', 'd6d', 'CVC', '', 'France', 0, 0, '2019-11-24 00:00:00', '2019-11-30 00:00:00', '../images/coupon/J9sC2PBIE44F93f2sqiJgxng2tD6EopiP6w.png'),
(14, '', 'discount', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', 'd6d', 'CVC', '', 'France', 0, 0, '2019-11-24 00:00:00', '2019-11-30 00:00:00', '../images/coupon/HCHm7qPk6X85c3F54DSUSrp2tDjMotODpDB.png'),
(15, '', '', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', '', '', '', 'France', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '../images/cashback/KBFMy5T2aTUSZDp2x1mB6MimgvbL897drP1.png'),
(16, '', '', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', '', '', '', 'France', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '../images/cashback/Fi6cFBxYxoMUtq9W4ncnDbXE9kdQHVY52Xw.png'),
(17, '', '', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', '', 'sdfsdfsd', '', 'France', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '../images/cashback/fk3lpS79c3OzZVI1eiEYqKJ2DpeR98vn5ze.png'),
(18, '', '', 'maulini', 'https://www.shutterstock.com/fr/search/cashback', '', 'sdfsdfsdf', '', 'France', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '../images/cashback/AliIjxbFRA9BVApfT6h5alXvt1IEGKrhQl3.png'),
(19, 'sfsfsdfsd', 'coupons', 'fred', 'https://www.twitch.tv/gegesurent', 'ssfsdfsdfsdfsdfds', 'dfvgsfsdfsdfsdfdsfsdfsdf', '', 'france', 0, 0, '2022-10-01 00:00:00', '2022-10-22 00:00:00', '');

-- --------------------------------------------------------

--
-- Structure de la table `gagnants`
--

CREATE TABLE `gagnants` (
  `id` int(11) NOT NULL,
  `idUser` int(20) NOT NULL,
  `montant` decimal(15,2) NOT NULL,
  `type` varchar(250) NOT NULL,
  `code` varchar(250) NOT NULL,
  `categorie` varchar(250) NOT NULL,
  `date` varchar(250) NOT NULL,
  `dateSend` varchar(250) NOT NULL,
  `etat` varchar(250) NOT NULL DEFAULT 'En attente',
  `ip` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `gagnants`
--

INSERT INTO `gagnants` (`id`, `idUser`, `montant`, `type`, `code`, `categorie`, `date`, `dateSend`, `etat`, `ip`) VALUES
(1, 3, 10.00, 'Virement Bancaire', '', 'Paiement', '13/05/2018 Ã  19:12:55', '16/05/2018 Ã  12:00:05', 'Valid&eacute;', '77.136.43.37'),
(2, 7, 5.00, 'Virement Bancaire', '', 'Paiement', '15/05/2018 Ã  19:04:29', '18/05/2018 Ã  09:23:52', 'Valid&eacute;', '90.34.72.54'),
(3, 7, 10.00, 'Skrill', '', 'Paiement', '05/06/2018 Ã  10:37:52', '08/06/2018 Ã  22:01:57', 'Valid&eacute;', '86.192.62.239'),
(4, 3, 10.00, 'Skrill', '', 'Paiement', '09/06/2018 Ã  12:36:47', '09/06/2018 Ã  14:18:51', 'Valid&eacute;', '83.157.241.90'),
(5, 3, 5.00, 'Skrill', '', 'Paiement', '09/06/2018 Ã  12:36:54', '09/06/2018 Ã  14:18:53', 'Valid&eacute;', '83.157.241.90'),
(6, 3, 15.00, 'paypal', '', 'Paiement', '22/06/2018 Ã  07:09:57', '22/06/2018 Ã  13:34:14', 'Valid&eacute;', '77.136.14.57'),
(7, 41, 2.00, 'paypal', '', 'Paiement', '22/06/2018 Ã  10:14:06', '22/06/2018 Ã  13:34:17', 'Valid&eacute;', '92.146.185.106'),
(8, 7, 10.00, 'paypal', '', 'Paiement', '22/06/2018 Ã  18:25:49', '04/07/2018 Ã  12:14:56', 'Valid&eacute;', '90.7.96.162'),
(9, 17, 10.00, 'paypal', '', 'Paiement', '26/06/2018 Ã  11:13:07', '26/06/2018 Ã  11:49:34', 'Valid&eacute;', '90.57.246.120'),
(10, 3, 20.00, 'paypal', '', 'Paiement', '10/07/2018 Ã  15:48:16', '10/07/2018 Ã  15:51:54', 'Valid&eacute;', '77.136.15.199'),
(11, 3, 5.00, 'paypal', '', 'Paiement', '10/07/2018 Ã  15:48:24', '10/07/2018 Ã  15:51:57', 'Valid&eacute;', '77.136.15.199'),
(12, 3, 3.00, 'paypal', '', 'Paiement', '10/07/2018 Ã  15:48:32', '10/07/2018 Ã  15:51:59', 'Valid&eacute;', '77.136.15.199'),
(13, 7, 10.00, 'paypal', '', 'Paiement', '04/08/2018 Ã  12:04:12', '08/08/2018 Ã  17:05:29', 'Valid&eacute;', '90.34.201.75'),
(14, 3, 20.00, 'Virement Bancaire', '', 'Paiement', '11/08/2018 Ã  14:40:06', '11/08/2018 Ã  16:43:52', 'Valid&eacute;', '83.157.241.90'),
(15, 3, 10.00, 'Virement Bancaire', '', 'Paiement', '11/08/2018 Ã  14:40:16', '11/08/2018 Ã  16:43:56', 'Valid&eacute;', '83.157.241.90'),
(16, 3, 5.00, 'Skrill', '', 'Paiement', '11/08/2018 Ã  14:40:26', '11/08/2018 Ã  16:46:10', 'Valid&eacute;', '83.157.241.90'),
(17, 2, 10.00, 'Virement Bancaire', '', 'Paiement', '11/08/2018 Ã  17:05:06', '11/08/2018 Ã  17:05:51', 'Valid&eacute;', '92.156.253.35'),
(18, 2, 1.00, 'Virement Bancaire', '', 'Paiement', '11/08/2018 Ã  21:42:18', '', 'Annul&eacute;', '92.156.253.35'),
(19, 2, 1.00, 'Virement Bancaire', '', 'Paiement', '13/08/2018 Ã  17:59:43', '13/08/2018 Ã  17:59:57', 'Valid&eacute;', '90.89.113.2'),
(20, 7, 20.00, 'Virement Bancaire', '', 'Paiement', '16/08/2018 Ã  13:05:10', '05/09/2018 Ã  16:18:29', 'Valid&eacute;', '92.147.66.148'),
(21, 7, 20.00, 'Virement Bancaire', '', 'Paiement', '16/08/2018 Ã  13:05:30', '05/09/2018 Ã  16:18:32', 'Valid&eacute;', '92.147.66.148'),
(22, 0, 0.00, '0.10', '', 'Bonus Connexion', '24/08/2018 Ã  03:45:05', '', 'Annul&eacute;', '90.34.167.177'),
(23, 2, 0.00, 'Cadeau Test Tombola', '', 'Tombola', '28/08/2018 Ã  16:00:20', '', 'Annul&eacute;', ''),
(24, 79, 0.00, '0.10', '', 'Bonus Connexion', '06/09/2018 Ã  16:13:01', '', 'Annul&eacute;', '90.57.111.228'),
(25, 3, 20.00, 'Virement Bancaire', '', 'Paiement', '06/09/2018 Ã  20:36:54', '12/09/2018 Ã  14:21:21', 'Valid&eacute;', '83.157.241.90'),
(26, 3, 10.00, 'Virement Bancaire', '', 'Paiement', '06/09/2018 Ã  20:37:04', '12/09/2018 Ã  14:21:23', 'Valid&eacute;', '83.157.241.90'),
(27, 7, 10.00, 'Virement Bancaire', '', 'Paiement', '08/09/2018 Ã  16:10:07', '12/09/2018 Ã  14:20:45', 'Valid&eacute;', '90.58.106.86'),
(28, 2, 0.00, '0.10', '', 'Bonus Connexion', '24/09/2018 Ã  11:46:36', '', 'Annul&eacute;', '109.220.209.213'),
(29, 109, 0.00, '0.10', '', 'Bonus Connexion', '27/09/2018 Ã  11:32:35', '', 'Annul&eacute;', '77.136.82.6'),
(30, 3, 20.00, 'Paypal', '', 'Paiement', '01/10/2018 Ã  14:01:29', '01/10/2018 Ã  14:03:59', 'Valid&eacute;', '77.136.42.69'),
(31, 3, 20.00, 'Paypal', '', 'Paiement', '01/10/2018 Ã  14:01:42', '01/10/2018 Ã  14:03:57', 'Valid&eacute;', '77.136.42.69'),
(32, 3, 5.00, 'Paypal', '', 'Paiement', '01/10/2018 Ã  14:01:57', '01/10/2018 Ã  14:03:54', 'Valid&eacute;', '77.136.42.69'),
(33, 7, 20.00, 'Paypal', '', 'Paiement', '08/10/2018 Ã  14:16:28', '04/11/2018 Ã  17:54:36', 'Valid&eacute;', '92.184.105.164'),
(34, 7, 20.00, 'Paypal', '', 'Paiement', '08/10/2018 Ã  14:16:51', '09/10/2018 Ã  19:22:14', 'Valid&eacute;', '92.184.105.164'),
(35, 7, 5.00, 'Paypal', '', 'Paiement', '08/10/2018 Ã  14:17:09', '09/10/2018 Ã  19:22:12', 'Valid&eacute;', '92.184.105.164'),
(36, 79, 10.00, 'Paypal', '', 'Paiement', '10/10/2018 Ã  08:32:20', '16/10/2018 Ã  19:41:50', 'Valid&eacute;', '86.193.188.115'),
(37, 79, 1.00, 'Paypal', '', 'Paiement', '10/10/2018 Ã  08:32:30', '16/10/2018 Ã  19:41:53', 'Valid&eacute;', '86.193.188.115'),
(38, 79, 1.00, 'Paypal', '', 'Paiement', '10/10/2018 Ã  08:32:39', '16/10/2018 Ã  19:41:55', 'Valid&eacute;', '86.193.188.115'),
(39, 79, 1.00, 'Paypal', '', 'Paiement', '10/10/2018 Ã  08:32:51', '16/10/2018 Ã  19:41:58', 'Valid&eacute;', '86.193.188.115'),
(40, 2, 10.00, 'Paypal', '', 'Paiement', '10/10/2018 Ã  15:01:40', '', 'Annul&eacute;', '86.201.167.236'),
(41, 3, 0.00, '0.10', '', 'Bonus Connexion', '12/10/2018 Ã  08:10:57', '', 'Annul&eacute;', '77.136.203.20'),
(42, 3, 0.00, '0.10', '', 'Bonus Connexion', '17/10/2018 Ã  11:42:04', '', 'Annul&eacute;', '77.136.15.98'),
(43, 2, 0.00, '0.10', '', 'Bonus Connexion', '18/10/2018 Ã  11:38:46', '', 'Annul&eacute;', '90.55.173.234'),
(44, 79, 0.00, '0.10', '', 'Bonus Connexion', '01/11/2018 Ã  07:44:46', '', 'Annul&eacute;', '90.57.182.3'),
(45, 3, 0.00, '0.10', '', 'Bonus Connexion', '04/11/2018 Ã  10:39:51', '', 'Annul&eacute;', '77.136.84.113'),
(46, 2, 10.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:47:58', '', 'Annul&eacute;', '90.89.123.203'),
(47, 3, 20.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:51:21', '04/11/2018 Ã  17:53:48', 'Valid&eacute;', '83.157.241.90'),
(48, 3, 20.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:51:29', '04/11/2018 Ã  17:53:52', 'Valid&eacute;', '83.157.241.90'),
(49, 3, 20.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:51:36', '04/11/2018 Ã  17:53:54', 'Valid&eacute;', '83.157.241.90'),
(50, 3, 20.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:51:44', '04/11/2018 Ã  17:53:56', 'Valid&eacute;', '83.157.241.90'),
(51, 3, 5.00, 'Paypal', '', 'Paiement', '04/11/2018 Ã  17:52:02', '04/11/2018 Ã  17:53:58', 'Valid&eacute;', '83.157.241.90'),
(52, 104, 0.00, '0.10', '', 'Bonus Connexion', '04/11/2018 Ã  22:00:13', '', 'Annul&eacute;', '37.173.86.59'),
(53, 2, 0.00, '0.10', '', 'Bonus Connexion', '05/11/2018 Ã  13:09:09', '', 'Annul&eacute;', '90.89.8.111'),
(54, 2, 20.00, 'Paypal', '', 'Paiement', '06/11/2018 Ã  18:20:47', '', 'Annul&eacute;', '90.89.119.94'),
(55, 3, 20.00, 'Paypal', '', 'Paiement', '07/11/2018 Ã  18:48:09', '', 'Annul&eacute;', '77.136.203.246'),
(56, 2, 1.50, 'NewPack', '', 'Code jeux', '09/11/2018 Ã  00:22:12', '', 'Annul&eacute;', '86.201.105.25'),
(57, 116, 10.00, 'Paysafecard', '', 'Carte-Cadeaux', '11/11/2018 Ã  01:50:21', '', 'Annul&eacute;', '78.193.222.129'),
(58, 116, 10.00, 'Zalando', '', 'Carte-Cadeaux', '11/11/2018 Ã  01:54:41', '', 'Annul&eacute;', '78.193.222.129'),
(59, 2, 10.00, 'Zalando', '', 'Carte-Cadeaux', '11/11/2018 Ã  10:20:49', '', 'Annul&eacute;', '90.89.28.156'),
(60, 2, 1.00, 'Paypal', '', 'Paiement', '11/11/2018 Ã  10:22:44', '11/11/2018 Ã  13:57:06', 'Valid&eacute;', '90.89.28.156'),
(61, 2, 1.30, 'AWcode', '', 'Code jeux', '11/11/2018 Ã  13:58:44', '', 'Annul&eacute;', '90.89.28.156'),
(62, 2, 1.00, 'CaraPass', '', 'Code jeux', '11/11/2018 Ã  13:58:50', '', 'Annul&eacute;', '90.89.28.156'),
(63, 3, 20.00, 'Paypal', '', 'Paiement', '11/11/2018 Ã  14:00:50', '04/12/2018 Ã  17:57:21', 'Valid&eacute;', '77.136.204.18'),
(64, 2, 1.00, 'Paypal', '', 'Paiement', '11/11/2018 Ã  15:00:20', '', 'Annul&eacute;', '90.89.28.156'),
(65, 2, 1.50, 'NewPack', '', 'Code jeux', '11/11/2018 Ã  15:00:27', '', 'Annul&eacute;', '90.89.28.156'),
(66, 2, 1.00, 'Virement Bancaire', '', 'Paiement', '11/11/2018 Ã  15:00:38', '', 'Annul&eacute;', '90.89.28.156'),
(67, 2, 1.50, 'NewPack', '', 'Code jeux', '11/11/2018 Ã  15:01:01', '', 'Annul&eacute;', '90.89.28.156'),
(68, 114, 1.00, 'Paypal', '', 'Paiement', '16/11/2018 Ã  23:07:24', '20/11/2018 Ã  11:07:56', 'Valid&eacute;', '212.239.194.167'),
(69, 2, 5.00, 'Paypal', '', 'Paiement', '17/11/2018 Ã  17:52:28', '', 'Annul&eacute;', '86.201.227.1'),
(70, 7, 20.00, 'Paypal', '', 'Paiement', '24/11/2018 Ã  03:12:51', '04/12/2018 Ã  17:57:59', 'Valid&eacute;', '92.155.123.176'),
(71, 7, 0.00, '0.10', '', 'Bonus Connexion', '25/11/2018 Ã  05:00:40', '', 'Annul&eacute;', '86.228.106.110'),
(72, 8, 0.00, '0.10', '', 'Bonus Connexion', '01/12/2018 Ã  13:39:12', '', 'Annul&eacute;', '90.23.176.77'),
(73, 89, 0.00, '0.10', '', 'Bonus Connexion', '02/12/2018 Ã  14:55:10', '', 'Annul&eacute;', '86.217.162.247'),
(74, 104, 0.00, '0.10', '', 'Bonus Connexion', '02/12/2018 Ã  16:39:07', '', 'Annul&eacute;', '88.138.87.126'),
(75, 3, 10.00, 'Paypal', '', 'Paiement', '04/12/2018 Ã  03:29:49', '04/12/2018 Ã  17:58:50', 'Valid&eacute;', '77.136.200.220'),
(76, 114, 1.00, 'Paypal', '', 'Paiement', '04/12/2018 Ã  23:25:11', '10/12/2018 Ã  17:58:39', 'Valid&eacute;', '83.134.126.11'),
(77, 8, 0.00, '0.10', '', 'Bonus Connexion', '09/12/2018 Ã  09:22:26', '10/12/2018 Ã  17:56:16', 'Valid&eacute;', '90.108.170.232'),
(78, 104, 5.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  16:12:59', '10/12/2018 Ã  17:59:44', 'Valid&eacute;', '80.215.217.158'),
(79, 104, 1.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  16:13:13', '10/12/2018 Ã  17:59:47', 'Valid&eacute;', '80.215.217.158'),
(80, 104, 1.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  16:13:20', '10/12/2018 Ã  17:59:50', 'Valid&eacute;', '80.215.217.158'),
(81, 104, 1.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  16:13:28', '10/12/2018 Ã  17:59:42', 'Valid&eacute;', '80.215.217.158'),
(82, 104, 1.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  16:13:35', '10/12/2018 Ã  17:59:52', 'Valid&eacute;', '80.215.217.158'),
(83, 7, 10.00, 'Paypal', '', 'Paiement', '09/12/2018 Ã  18:20:15', '10/12/2018 Ã  18:00:58', 'Valid&eacute;', '92.155.81.200'),
(84, 3, 0.00, '0.10', '', 'Bonus Connexion', '15/12/2018 Ã  12:12:56', '15/12/2018 Ã  16:45:30', 'Valid&eacute;', '77.136.82.143'),
(85, 114, 1.00, 'Virement Bancaire', '', 'Paiement', '15/12/2018 Ã  15:42:23', '23/12/2018 Ã  15:08:36', 'Valid&eacute;', '83.134.125.42'),
(86, 3, 10.00, 'Paypal', '', 'Paiement', '16/12/2018 Ã  11:44:06', '26/12/2018 Ã  17:57:49', 'Valid&eacute;', '77.136.16.150'),
(87, 3, 20.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:18:30', '26/12/2018 Ã  17:58:10', 'Valid&eacute;', '77.136.16.226'),
(88, 3, 10.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:19:01', '26/12/2018 Ã  17:57:55', 'Valid&eacute;', '77.136.16.226'),
(89, 3, 5.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:19:12', '26/12/2018 Ã  17:57:57', 'Valid&eacute;', '77.136.16.226'),
(90, 3, 1.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:19:22', '26/12/2018 Ã  17:58:00', 'Valid&eacute;', '77.136.16.226'),
(91, 3, 1.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:19:29', '26/12/2018 Ã  17:58:03', 'Valid&eacute;', '77.136.16.226'),
(92, 3, 1.00, 'Paypal', '', 'Paiement', '19/12/2018 Ã  07:19:37', '26/12/2018 Ã  17:58:08', 'Valid&eacute;', '77.136.16.226'),
(93, 114, 0.00, '0.10', '', 'Bonus Connexion', '20/12/2018 Ã  00:19:08', '', 'Annul&eacute;', '83.134.235.84'),
(94, 124, 1.00, 'Paypal', '', 'Paiement', '20/12/2018 Ã  10:12:47', '23/12/2018 Ã  15:09:45', 'Valid&eacute;', '90.5.248.150'),
(95, 2, 5.00, 'Paypal', '', 'Paiement', '20/12/2018 Ã  21:27:13', '23/12/2018 Ã  15:09:41', 'Valid&eacute;', '90.76.166.62'),
(96, 3, 1.00, 'Paypal', '', 'Paiement', '25/12/2018 Ã  13:49:41', '26/12/2018 Ã  17:58:05', 'Valid&eacute;', '77.136.18.204'),
(97, 33, 0.00, '0.10', '', 'Bonus Connexion', '25/12/2018 Ã  22:45:32', '26/12/2018 Ã  17:55:31', 'Valid&eacute;', '85.168.50.122'),
(98, 8, 20.00, 'Paypal', '', 'Paiement', '01/01/2019 Ã  11:18:23', '03/01/2019 Ã  13:23:01', 'Valid&eacute;', '90.108.186.143'),
(99, 12, 0.00, '0.10', '', 'Bonus Connexion', '02/01/2019 Ã  15:07:38', '03/01/2019 Ã  13:20:36', 'Valid&eacute;', '92.167.255.21'),
(100, 124, 1.00, 'Paypal', '', 'Paiement', '02/01/2019 Ã  16:14:24', '03/01/2019 Ã  13:21:51', 'Valid&eacute;', '92.136.77.173'),
(101, 114, 1.00, 'Paypal', '', 'Paiement', '10/01/2019 Ã  20:52:36', '14/01/2019 Ã  21:43:51', 'Valid&eacute;', '83.134.53.158'),
(102, 136, 0.00, '0.10', '', 'Bonus Connexion', '11/01/2019 Ã  00:00:25', '14/01/2019 Ã  00:18:04', 'Valid&eacute;', '90.70.183.182'),
(103, 124, 0.00, '0.10', '', 'Bonus Connexion', '11/01/2019 Ã  11:27:29', '14/01/2019 Ã  00:18:01', 'Valid&eacute;', '109.222.62.250'),
(104, 89, 1.00, 'Paypal', '', 'Paiement', '11/01/2019 Ã  13:32:45', '14/01/2019 Ã  21:46:01', 'Valid&eacute;', '86.217.162.247'),
(105, 89, 1.00, 'Paypal', '', 'Paiement', '11/01/2019 Ã  13:32:55', '14/01/2019 Ã  21:46:04', 'Valid&eacute;', '86.217.162.247'),
(106, 114, 0.00, '0.10', '', 'Bonus Connexion', '14/01/2019 Ã  12:31:48', '14/01/2019 Ã  21:42:00', 'Valid&eacute;', '83.134.53.57'),
(107, 124, 1.00, 'Paypal', '', 'Paiement', '15/01/2019 Ã  08:43:59', '21/01/2019 à 19:24:07', 'Valid&eacute;', '92.136.196.52'),
(108, 3, 1.00, 'Paypal', '', 'Paiement', '15/01/2019 Ã  11:04:38', '21/01/2019 à 19:22:40', 'Valid&eacute;', '77.136.42.193'),
(109, 3, 1.00, 'Paypal', '', 'Paiement', '15/01/2019 Ã  11:04:47', '21/01/2019 à 19:22:43', 'Valid&eacute;', '77.136.42.193'),
(110, 3, 1.00, 'Paypal', '', 'Paiement', '15/01/2019 Ã  11:04:55', '21/01/2019 à 19:22:45', 'Valid&eacute;', '77.136.42.193'),
(111, 3, 1.00, 'Paypal', '', 'Paiement', '15/01/2019 Ã  11:05:02', '21/01/2019 à 19:22:33', 'Valid&eacute;', '77.136.42.193'),
(112, 3, 5.00, 'Paypal', '', 'Paiement', '18/01/2019 à 23:48:05', '21/01/2019 à 19:22:36', 'Valid&eacute;', '77.136.204.54'),
(113, 124, 1.00, 'Paypal', '', 'Paiement', '19/01/2019 à 11:01:55', '21/01/2019 à 19:24:05', 'Valid&eacute;', '92.136.196.52'),
(114, 89, 1.00, 'Paypal', '', 'Paiement', '23/01/2019 à 16:30:03', '09/08/2019 Ã  15:08:22', 'Valid&eacute;', '90.78.129.186'),
(115, 142, 10.00, 'Amazon', 'test', 'Carte-Cadeaux', '10/08/2019 Ã  09:22:46', '10/08/2019 Ã  09:40:35', 'Valid&eacute;', '91.160.73.193'),
(116, 142, 10.00, 'Psn', '', 'Carte-Cadeaux', '10/08/2019 Ã  09:30:49', '', 'Refus&eacute;', '91.160.73.193'),
(117, 148, 20.00, 'Zalando', '', 'Carte-Cadeaux', '11/08/2019 Ã  18:49:27', '11/08/2019 Ã  18:51:08', 'Valid&eacute;', '86.206.42.254'),
(118, 148, 20.00, 'Paypal', '', 'Paiement', '11/08/2019 Ã  18:49:34', '11/08/2019 Ã  18:51:05', 'Valid&eacute;', '86.206.42.254'),
(119, 148, 50.00, 'Psn', '', 'Carte-Cadeaux', '11/08/2019 Ã  18:50:34', '11/08/2019 Ã  18:51:02', 'Valid&eacute;', '86.206.42.254'),
(120, 155, 1.00, 'Virement Bancaire', '', 'Paiement', '17/08/2019 Ã  20:36:36', '17/08/2019 Ã  20:36:53', 'Valid&eacute;', '90.55.172.189'),
(121, 155, 20.00, 'Virement Bancaire', '', 'Paiement', '17/08/2019 Ã  20:38:45', '17/08/2019 Ã  20:39:02', 'Valid&eacute;', '90.55.172.189'),
(122, 166, 0.90, 'Paypal', '', 'Paiement', '29/08/2019 Ã  16:10:35', '29/08/2019 Ã  16:12:38', 'Valid&eacute;', '90.55.177.22'),
(123, 170, 10.00, 'Amazon', 'dgfgdfhfgjghkjkhjkhjkhjkhjkhj', 'Carte-Cadeaux', '10/09/2022 à 13:51:58', '10/09/2022 à 13:52:20', 'Validé', '90.2.78.60'),
(124, 156, 20.00, 'Amazon', 'sfsdfsfdssdfdsf', 'Carte-Cadeaux', '10/09/2022 à 15:28:28', '10/09/2022 à 15:28:43', 'Validé', '90.2.78.60'),
(125, 156, 20.00, 'Amazon', 'sfsdfdsfdsfdsfdsf', 'Carte-Cadeaux', '10/09/2022 à 15:28:32', '10/09/2022 à 15:28:46', 'Validé', '90.2.78.60'),
(126, 156, 30.00, 'Xbox', 'rgtertertretertertert', 'Carte-Cadeaux', '18/09/2022 à 13:27:07', '18/09/2022 à 13:27:36', 'Validé', '86.195.234.242');

-- --------------------------------------------------------

--
-- Structure de la table `histo_offers`
--

CREATE TABLE `histo_offers` (
  `id` int(11) NOT NULL,
  `idUser` varchar(50) NOT NULL,
  `offerwall` varchar(250) NOT NULL,
  `idt` varchar(250) NOT NULL,
  `regie` varchar(250) NOT NULL,
  `remuneration` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `date` varchar(250) NOT NULL,
  `dateUsTime` datetime NOT NULL,
  `data` varchar(250) NOT NULL,
  `etat` varchar(250) NOT NULL DEFAULT 'En cours',
  `ip` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `histo_offers`
--

INSERT INTO `histo_offers` (`id`, `idUser`, `offerwall`, `idt`, `regie`, `remuneration`, `date`, `dateUsTime`, `data`, `etat`, `ip`) VALUES
(2, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 'OfferToro', 'flmgd', '', 0.004200, '9/29/2023', '0000-00-00 00:00:00', 'jjjmk', 'PENDING', '0.0.0.0'),
(3, '8cba6605-57a0-49ab-a3fb-76c799a5aa22', 'OfferToro', '3p7dt', '', 0.004200, '9/29/2023', '0000-00-00 00:00:00', 'lp1v1', 'PENDING', '0.0.0.0'),
(4, '8cba6605-57a0-49ab-a3fb-76c799a5aa22', 'OfferToro', 'TorroCon', '', 0.004200, '9/30/2023', '0000-00-00 00:00:00', 'poy4z', 'PENDING', '0.0.0.0'),
(5, '8cba6605-57a0-49ab-a3fb-76c799a5aa22', 'OfferToro', 'offer', '', 0.004200, '9/30/2023', '0000-00-00 00:00:00', '8k7pd', 'PENDING', '0.0.0.0'),
(6, '8cba6605-57a0-49ab-a3fb-76c799a5aa22', 'OfferToro', 'Wizzer - NEW iPad - DE', '', 0.004200, '9/30/2023', '0000-00-00 00:00:00', '0lh3j', 'PENDING', '0.0.0.0'),
(7, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 'OfferToro', 'Macbook Pro - IQ', '', 0.000300, '9/30/2023', '0000-00-00 00:00:00', 'g2a31', 'PENDING', '0.0.0.0'),
(8, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 'OfferToro', 'Earn Rewards - Feed Hungry Children', '', 0.013200, '9/30/2023', '0000-00-00 00:00:00', 'cfqtj', 'PENDING', '0.0.0.0');

-- --------------------------------------------------------

--
-- Structure de la table `messagerie`
--

CREATE TABLE `messagerie` (
  `id` int(11) NOT NULL,
  `id2` varchar(200) DEFAULT NULL,
  `titre` varchar(300) DEFAULT NULL,
  `message` mediumtext DEFAULT NULL,
  `user` varchar(250) DEFAULT NULL,
  `user2` varchar(250) DEFAULT NULL,
  `date` varchar(250) DEFAULT NULL,
  `minute` varchar(50) DEFAULT NULL,
  `lu` int(5) DEFAULT 0,
  `reponse` longtext DEFAULT NULL,
  `status` varchar(30) DEFAULT 'EN ATTENTE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `titre` varchar(60) NOT NULL,
  `date` varchar(15) NOT NULL,
  `description` longtext NOT NULL,
  `etat` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `titre`, `date`, `description`, `etat`) VALUES
(11, 'dfgdfgdfgdfg', '2022-10-29', 'dgdfgdfgdf', 1);

-- --------------------------------------------------------

--
-- Structure de la table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `idoffre` varchar(50) NOT NULL,
  `nom` varchar(250) NOT NULL,
  `url` varchar(250) NOT NULL,
  `description` mediumtext NOT NULL,
  `description2` mediumtext NOT NULL,
  `pays` varchar(250) NOT NULL,
  `remuneration` decimal(15,2) NOT NULL DEFAULT 0.00,
  `montant` decimal(15,2) NOT NULL DEFAULT 0.00,
  `valid` int(10) NOT NULL DEFAULT 0,
  `actif` int(10) NOT NULL DEFAULT 0,
  `date` varchar(250) NOT NULL,
  `regie` varchar(250) NOT NULL,
  `annonceur` varchar(255) DEFAULT NULL,
  `quota` int(11) NOT NULL,
  `premium` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `offers`
--

INSERT INTO `offers` (`id`, `idoffre`, `nom`, `url`, `description`, `description2`, `pays`, `remuneration`, `montant`, `valid`, `actif`, `date`, `regie`, `annonceur`, `quota`, `premium`, `image`) VALUES
(2, 'KR4r9ZMeEDnFspyu7uvzXZXMIjal4U', 'Trousse de voyage nuxe', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=c3197f77&data1=#IDM,https://www.twitch.tv/gegesurent,https://www.gliing.com/offers/complete-offers', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR,MDG', 0.07, 0.30, 0, 1, '02/01/2019 Ã  15:48:27', 'afflight', 'conso-enquete', 3, 0, ''),
(3, 'aLr7FWKnmYVhKowHQrKqB5nyAkoVVg', 'Pour ou Contre le prÃ©lÃ¨vement Ã  la source', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=7d7e4c8d&data1=#IDM', 's\'inscrire', '', 'FR', 0.07, 0.30, 0, 1, '14/04/2018 Ã  11:06:42', 'afflight', 'sondage officiel', 1, 0, ''),
(4, '1cpYR3uDGvZDdNRONHgzHfrZF4LkcH', 'Test de produits Box BeautÃ©', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=930597da&data1=#IDM,https://www.twitch.tv/veerdose', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 0.06, 0, 1, '02/01/2019 Ã  15:48:55', 'afflight', 'Mediazeen', 2, 0, ''),
(5, 'W4hcExsTrvXalmrPSO11ybizoZj6J3', 'Minute Conso - Test de produit Lessive', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=9c1a2d98&data1=#IDM', 's\'inscrire', '', 'FR', 0.07, 0.30, 0, 1, '28/12/2018 Ã  14:11:49', 'afflight', 'Mediazeen', 0, 0, ''),
(6, 'rU3uikT41c8rgrQ1yFZOwkOJihxOgV', 'Coffrets johnny hallyday', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=4bf040be&data1=#IDM,https://mail.google.com/mail/u/2/?ogbl#inbox', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 0.30, 0, 1, '02/01/2019 Ã  15:43:22', 'afflight', 'conso-avenue', 2, 0, ''),
(7, 'DcDtTAjnNxiEVmwuUmBEgFs9jNVcBr', '1000 euro cdiscount', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=aa6dff63&data1=#IDM', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonneÃ©e cochez des oui ', 'FR', 0.07, 0.30, 0, 1, '02/01/2019 Ã  15:42:12', 'afflight', 'conso-enquete', 1, 0, ''),
(8, 'CuxrNbthC4NyYVHSJFr9f5pNeivHc8', 'Pour ou Contre l\'augmentation des salaires des professeurs ?', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=68282e25&data1=#IDM', 's\'inscrire', '', 'FR', 0.07, 0.30, 0, 1, '17/04/2018 Ã  16:41:52', 'afflight', 'Sondage officiel', 1, 0, ''),
(9, 'CkKhlYC8KnCyHZtOVoUkArC8OiX6mi', 'Taxe d\'habitation', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=97eb9734&data1=#IDM', 's\'inscrire', '', 'FR', 0.07, 0.30, 0, 1, '15/04/2018 Ã  15:35:26', 'afflight', 'Sondage officiel', 1, 0, ''),
(10, '8cKmMaMpVoIfryRI5ncAKmPmlkAweN', 'Recevez gratuitement des paquets Celebrations !', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=2dba7b2a&data1=#IDM', 's\'inscrire', '', 'FR', 0.09, 0.65, 0, 0, '15/04/2018 Ã  15:34:50', 'afflight', 'Enquete-Kdo', 0, 0, ''),
(11, 'DOOXefyW7wKEnR2EaYUY8TBdjo4hvJ', 'Votre bon d\'achat  ALDI de 250â‚¬', 'http://hasofferswall.com/click.php?camp=851&pubid=3&', 'S\'inscrire au site ', '', 'MDG', 0.08, 0.65, 0, 1, '28/10/2018 Ã  14:15:13', 'afflight', 'CEOO Marketing GmbH', 0, 0, ''),
(12, 'DWweTHqHGpDowXtJ5noGpcDQHVuINU', 'Gagner 1000 euros de courses', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=446079e2&data1=#IDM', 's\'inscrire', 'S\'insiyp_yioturcÃ¨-Ã¨\'crire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 0.35, 0, 1, '09/08/2019 Ã  15:35:04', 'afflight', 'MDS PERFORMANCE', 1, 0, ''),
(13, 'YTD8ZGic16kVfg726bgE8JYZFDGaKX', '1 an de produits de vos marques prÃ©fÃ©rÃ©es', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=7d97d049&data1=#IDM', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonneÃ©e cochez des oui ', 'FR', 0.07, 0.35, 0, 0, '02/01/2019 Ã  15:41:49', 'afflight', 'MDS PERFORMANCE', 0, 0, ''),
(14, '5yPr1f4IEkNCw8dxWohDJ8n6YnOJ9s', 'Gagnez un voyage pour deux aux CaraÃ¯bes', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=520e3f42&data1=#IDM', 's\'inscrire', '', 'FR', 0.07, 0.33, 0, 1, '10/05/2018 Ã  14:52:41', 'afflight', 'Vip concours', 0, 0, ''),
(15, 'zAbs6t7ajZvrb79ajw6aCfpz56LKrQ', 'Pass cinÃ©ma', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=b1f9e98a#IDM', 's\'inscrire', '', 'FR', 0.07, 0.33, 0, 0, '15/04/2018 Ã  14:35:16', 'afflight', 'affiliatis', 1, 0, ''),
(16, 's84fr14hchMbxxUMsH57SqyHy7PAlg', 'ChÃ¨que de 10 000â‚¬', 'http://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=c70b158a&data1=#IDM', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 0.33, 0, 1, '02/01/2019 Ã  15:43:06', 'afflight', 'affiliatis', 0, 1, ''),
(17, 'DjB85VoFKHrQgbWmbqC98paxLZeGgP', 'Vos parfurm de luxe', 'https://bit.ly/2lSl6BM', 's\'inscrire au site', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 1.10, 0, 1, '02/01/2019 Ã  15:46:48', 'afflight', 'vip concours', 0, 1, ''),
(18, 'FiapIACRwhF5U3x9ItDbTTfJQcqnU8', 'Love Myastro', 'http://ads.optimiads.com/cpc/385/vBlyOYZQSZ/uid=#IDM', 's\'inscrire', '', 'FR', 0.10, 1.00, 0, 0, '10/05/2018 Ã  14:55:26', 'Optimiads', 'voyante', 0, 1, ''),
(21, 'pelnilg9GwgHrIIxlhaYqNnsVWhvVR', 'Gagnez une xbox one x', 'http://ads.optimiads.com/cpc/385/ZNo4daB1qx/uid=#IDM', 's\'inscrire', '', 'FR', 0.10, 0.60, 0, 0, '10/05/2018 Ã  14:55:15', 'Optimiads', 'Amanzando', 0, 0, ''),
(22, 'PYIoXdOmCGeVbQG8TvbwoYDWOMoaTg', '3 jours gourmands', 'http://ads.optimiads.com/cpc/385/bZQ33lGGFo/uid=#IDM', 's\'inscrire', 'S\'inscrire au site avec des vrai coordonneÃ©e cochez des oui ', 'FR', 0.07, 0.40, 0, 1, '02/01/2019 Ã  15:42:26', 'Optimiads', 'Vip concours', 0, 0, ''),
(23, 'JF1An2ls8tSJVfIRk3wDvvThmJGnJ2', 'Mon opnion compte', 'https://goo.gl/aXWKAe', 's\'inscrire et validÃ© l\'email', '', 'FR', 0.10, 0.60, 0, 0, '10/05/2018 Ã  14:53:05', 'trade', 'Mon opinion', 0, 1, ''),
(27, 'wsUyTLTyCkPzH7w5reqbmLyQTFhcS4', 'Gagnez un chÃ¨que cadeau pour votre shopping d\'une valeur de 1000 euros', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=b08ece21&data1=#IDM', 'S\'inscrire', '', 'FR', 0.05, 0.40, 0, 0, '28/12/2018 Ã  14:27:35', 'Afflight', 'Vip Concours', 1, 0, ''),
(29, 'cTaiL19wEdySauacRCzwfvMxUP2brc', 'Montre tendance', 'https://bit.ly/2jFz6Oh', 'S\'inscrire et cochez des oui et allez jusqu\'a la fin ', '', 'fr', 0.07, 0.30, 0, 1, '10/05/2018 Ã  16:13:43', 'afflight', 'conso-enquete', 0, 1, ''),
(31, '9kHXaHUv4Jx9muR6XhNmfnicxAqgDl', 'speedy.A', 'https://goo.gl/jh5smP', 'telechargez coupon', '', 'FR', 0.20, 1.00, 0, 0, '06/09/2018 Ã  19:52:02', 'ADCOKTAIL', 'speedy', 0, 1, ''),
(32, 'eQdAuXHz1lG6g6PrXcrhk86GO2HEqP', 'coupon network.A', 'https://bit.ly/2I2znW7', 'tÃ©lÃ©charger 7 coupons et imprimer', '', 'fr', 0.15, 0.60, 0, 1, '28/12/2018 Ã  14:21:45', 'effiliation', 'coupon network', 0, 1, ''),
(33, 'YISlCzzFySoYRdFc7JF9pyPuqFmv8i', 'Gagnez 100 euro de course', 'https://bit.ly/2KLcB6I', 'S\'inscrit et validÃ©e email', '', 'FR', 0.07, 35.00, 0, 1, '10/05/2018 Ã  14:55:05', 'AFFLIGHT', 'mds performance', 0, 1, ''),
(34, 'Z9arV3UDbdxDU4ZPHce2vxeZrcFw9u', 'ABC baby.(A)', 'https://bit.ly/2jCTobh', 'S\'inscrire au site', 'yirzreqtdft_yÃ§_yo', 'FR', 0.10, 0.40, 0, 1, '09/08/2019 Ã  15:32:21', 'effiliation', 'ADRESS COMPANY SAS', 5000, 1, ''),
(35, 'Tl6TaxQBdUFi6ZIqQbSHSKoJmlddxg', 'BÃ©bÃ© cadeaux.A', 'https://bit.ly/2rpLFBt', 'S\'inscrire au site', 'tuyrfityedtrzsreq', 'FR', 0.10, 0.60, 0, 1, '09/08/2019 Ã  15:34:10', 'AFFLIGHT', 'Affinicia', 0, 1, ''),
(36, 'Hn2bdCzbFEKIXAmGypMgtxdKLUkfoV', 'bon plan kitchen', 'http://hasofferswall.com/click.php?camp=845&pubid=3&', 'S\'inscrire au site ', '', 'fr', 0.10, 0.65, 0, 1, '26/11/2019 Ã  00:01:13', 'hasofferwall', 'BON PLAN KITCHEN TROTTER', 0, 0, '../images/missions/UbSh8MuFf4my9QVHO4B3Ygef7dLhvVlNYra.jpg'),
(37, 'Uq3VDbNOK4nZ2rjS8F7HAb45uOHhkn', 'coupon network.B', 'https://bit.ly/2I2znW7', 'tÃ©lÃ©charger 7 coupons et imprimer', '', 'fr', 0.15, 0.60, 0, 1, '01/10/2018 Ã  12:23:12', 'effiliation', 'Coupon Network', 0, 1, ''),
(38, 'Tei2OK33iRpFCVlCL2ypC7T3sxcTGT', 'Cuisine Robot Jeu Futura', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=68605d9f&data1=#IDM', 'S\'incrire ', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.07, 0.30, 0, 1, '02/01/2019 Ã  15:43:46', 'AFFLIGHT', 'Mediazeen', 0, 0, ''),
(39, '9wY5NXT4kCYyLJBmjmAWmetkDAMbpA', 'Gagnez 500 euro primark', 'https://bit.ly/2JY69Z6', 'S\'inscrire et cochez des oui et allez jusqu\'a la fin ', '', 'FR', 0.07, 0.30, 0, 1, '10/05/2018 Ã  16:13:29', 'afflight', 'conso-enquete', 0, 1, ''),
(40, 'SUHRJBQ9MV25CW9DMxXjD8eDEF8m6d', 'Recevez le nouveau snickers', 'https://bit.ly/2Ij5Pqr', 'S\'inscrire et cochez des oui et allez jusqu\'a la fin ', '', 'fr', 0.07, 0.30, 0, 1, '10/05/2018 Ã  16:13:16', 'afflight', 'conso-enquete', 1, 1, ''),
(41, 'PJ1dJ1USnKp7FqHKkLdzXkwJDVk1EQ', 'speedy.B', 'https://bit.ly/2G1bfBc', 'telechargez coupon', '', 'fr', 0.20, 0.60, 0, 0, '06/09/2018 Ã  19:52:22', 'ADCOKTAIL', 'speedy', 0, 1, ''),
(42, 'tDyjfi8cMqDnDcCdwXtO9jMg89GsdH', 'REMPORTEZ UN VOYAGE EXTRAORDINAIRE !', 'http://hasofferswall.com/click.php?camp=849&pubid=3&', 's\'inscrire au site', '', 'fr', 0.08, 0.20, 0, 1, '28/12/2018 Ã  14:48:32', 'afflight', 'Conso-enquete', 0, 0, ''),
(43, 'jxzTZsZPKDuPzMndIuFiAKJkUecAyy', 'coupon network.D', 'https://bit.ly/2I2znW7', 's\'inscrire et imprimer 7 coupon', '', 'fr', 0.15, 0.60, 0, 1, '01/10/2018 Ã  12:23:33', 'effiliation', 'coupon network', 0, 1, ''),
(44, 'qhYcDNOGW9TaNCaRyPcRnrhECclao3', 'coupon network.C', 'https://bit.ly/2I2znW7', 's\'inscrire et imprimer 7 coupon', '', 'fr', 0.15, 0.60, 0, 1, '28/12/2018 Ã  14:22:19', 'effiliation', 'coupon network', 0, 1, ''),
(45, 'AT9kgRcCt9AFWyW1R4zXSCeo4TIfzV', 'Les poulettes.D', 'https://bit.ly/2rNBXs9', 's\'inscrire et newseltter', '', 'fr', 0.09, 0.30, 0, 0, '05/07/2018 Ã  10:24:27', '1', 'les poulettes', 0, 1, ''),
(46, '7cHcMlm4gSCYjdwtdzGgeZWSgTiEER', 'ABC baby.(B)', 'https://bit.ly/2jCTobh', 's\'inscrire au site', '', 'fr', 0.10, 0.30, 0, 1, '17/09/2018 Ã  13:45:05', 'effiliation', 'ADRESS COMPANY SAS', 0, 1, ''),
(47, 'VePnlUtA9D51Gezb62WGCnHU8FjCcj', 'Speedy.D', 'https://goo.gl/jh5smP', 'telechargez coupon', '', 'fr', 0.20, 1.00, 0, 0, '06/09/2018 Ã  19:51:41', 'adcoktail', 'speedy', 0, 1, ''),
(48, 'dCW5VGQZBWBtXbU6bFALqiKZbaNg7C', 'speedy.C', 'https://bit.ly/2G1bfBc', 'telechargez coupon', '', 'fr', 0.20, 1.00, 0, 0, '06/09/2018 Ã  19:52:43', 'adcoktail', 'speedy', 0, 1, ''),
(49, 'QPoIsaUdmYpRlReeYUS94GtBIpJuDu', 'H&amp;M', 'https://goo.gl/npgbhZ', 's\'inscrire au site  et validÃ© l\'email', '', 'fr', 0.08, 0.45, 0, 0, '10/05/2018 Ã  15:00:33', 'adcoktail', '7sections GmbH', 0, 1, ''),
(50, 'W39EqwRcpw3Rh1aOifMmletBxCp5iU', 'Le petit marseillais', 'https://goo.gl/Bga29v', 's\'inscrire et allez jusqu\'a la fin', '', 'fr', 0.07, 0.30, 0, 1, '10/05/2018 Ã  16:09:01', 'afflight', 'conso-enquete', 0, 1, ''),
(51, 'MUwb6tkOEJlkIP7eiVxDMet8bf2tDv', 'Plat cuisinÃ©s', 'https://goo.gl/dhz4UU', 'S\'inscrire au site et allez jusqu\'a la fin', '', 'fr', 0.07, 0.30, 0, 1, '10/05/2018 Ã  16:12:23', 'afflight', 'conso-enquete', 0, 1, ''),
(52, 'xUdBXLraGoJAWNa5Kk1I7zpqkPtuPt', 'Recevez gratuitement un ordinateur ASUS Zenbook', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=efb4ab22&data1=#IDM', 'S\'inscrire', '', 'fr', 0.08, 0.40, 0, 1, '28/12/2018 Ã  14:15:05', '1', 'Mediazeen', 0, 0, ''),
(53, 'uCJ4mmVUFAhOgQG7GIhvalrXHOorFy', 'Meteo job', 'https://bit.ly/2IZ4qFO', 's\'insrire au site', '', 'fr', 0.08, 0.30, 0, 1, '14/11/2018 Ã  21:03:32', 'adcoktail', 'Meteojob', 1000, 1, ''),
(54, 'IjLfTo6qqkCBkEecde8bZhPSkVmqUr', 'Gagnez nouvelles clio', 'https://bit.ly/2k0B3Vv', 'S\'inscrire au site', '', 'FR', 0.09, 0.60, 0, 1, '21/05/2018 Ã  18:15:06', 'afflight', 'toleadoo GmbH', 0, 1, ''),
(55, 'Sx1dBpw3y3s2fxbsXkFToDgurNBQ9Z', 'Oasis Haribo', 'https://bit.ly/2LANG5j', 'S\'inscrire au site', '', 'fr', 0.08, 0.60, 0, 0, '28/08/2018 Ã  14:44:39', 'afflight', 'Js Media Prod', 0, 1, ''),
(56, 'UdG9Th5NSRzuzVfIWTUxUPm9aR2rAm', 'Gagnez 20 000 euro', 'http://hasofferswall.com/click.php?camp=847&pubid=3&', 'S\'inscrire au site', '', 'fr', 0.08, 0.60, 0, 1, '28/10/2018 Ã  14:11:00', 'afflight', 'toleadoo GmbH', 0, 0, ''),
(57, 'OaC5nx4SatVrDTfTtjAGUuetsRgJrf', 'Meteo job', 'https://bit.ly/2IZ4qFO', 'S\'nscrire au site', '', 'FR', 0.08, 0.50, 0, 1, '14/11/2018 Ã  21:04:03', 'ADCOKTAIL', 'Meteojob', 100, 1, ''),
(58, 'LfAVYmNxfyKmJ2WTfmarsQOsOfAhTw', 'JC Fashion', 'https://bit.ly/2wX7cXv', 'S\'nscrire au site et validÃ© l\'email', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'FR', 0.08, 0.50, 0, 1, '02/01/2019 Ã  15:46:13', 'ADCOKTAIL', 'Adalniti', 0, 1, ''),
(59, 'SiAAbkptfNb5MsVNFxvJkKvbFlHqcE', 'Gaddin', 'http://gaddin.com/index.php?sponsor=e53cfde5fff90e43f8e5313a880fc666', 's\'inscrire au site et valider email', '', 'fr', 0.10, 0.50, 0, 0, '29/10/2018 Ã  17:47:41', 'adcoktail', 'Gaddin', 0, 0, ''),
(60, 'r6uDrhRZvifCugPS1qe5wOnYGYjUjC', 'BÃ©bÃ© cadeaux.B', 'https://bit.ly/2rpLFBt', 'S\'inscrire au site', '', 'fr', 0.10, 0.30, 0, 1, '05/07/2018 Ã  10:22:21', 'AFFLIGHT', 'Affinicia', 0, 1, ''),
(61, '6SSFLvIztLi5g4tZ9199TxEkrwT2Hj', 'shopmium(4)', 'https://bit.ly/2La0JuG', 'S\'inscrire au site avec des vrai coordonÃ©e', '', 'fr', 0.10, 0.50, 0, 1, '09/10/2018 Ã  09:51:13', 'adcoktail', 'shop', 0, 1, ''),
(62, 'YWZNlyCEURybIM5xtRvgFRpB4GMPHm', 'shopmium(1)', 'https://bit.ly/2La0JuG', 'S\'inscrire au site avec des vrai coordonÃ©e', '', 'fr', 0.10, 0.50, 0, 1, '09/10/2018 Ã  09:50:00', 'adcoktail', 'shop', 0, 1, ''),
(63, 'H6NOxYBKNwpKxHbrpXvCp2KKEFRzVa', 'Gagne 200â‚¬ Ã  dÃ©penser sur  Playstation store', 'http://hasofferswall.com/click.php?camp=853&pubid=3&', 'S\'inscrie au site ', '', 'fr', 0.08, 0.50, 0, 0, '28/10/2018 Ã  14:17:49', 'afflight', 'CEOO Marketing GmbH', 0, 0, ''),
(64, 'Cvy7IeSj3wqfFoRSSxjQWzSw2VPU8h', 'Gagnez un bon de 500â‚¬ Ã‰changeable dans votre magasin de sport prÃ©fÃ©rÃ©', 'http://hasofferswall.com/click.php?camp=852&pubid=3&', 'S\'inscrie au site ', '', 'fr', 0.08, 0.50, 0, 0, '28/10/2018 Ã  14:16:42', 'afflight', 'CEOO Marketing GmbH', 0, 0, ''),
(65, 'cW5bBnwW6kW9xMxid2D6TCU22KumJm', 'shopmium(3)', 'https://bit.ly/2La0JuG', 'S\'inscrie au site', '', 'fr', 0.10, 0.50, 0, 1, '09/10/2018 Ã  09:50:45', 'adcoktail', 'shop', 0, 1, ''),
(66, 'L4d6vQIRxPWtpPOHHGenfaCMrxkrZX', 'ABC baby.(D)', 'https://bit.ly/2jCTobh', 'S\'inscrie au site', '', 'fr', 0.10, 0.50, 0, 1, '16/09/2018 Ã  17:33:13', 'effiliation', 'ADRESS COMPANY SAS', 0, 1, ''),
(67, 'crBpoX32qvDUr7BvCcS8vAqMrFHW2z', 'ABC baby.(C)', 'https://bit.ly/2jCTobh', 'S\'inscrie au site', '', 'fr', 0.10, 0.50, 0, 1, '17/09/2018 Ã  13:45:17', 'effiliation', 'ADRESS COMPANY SAS', 0, 1, ''),
(68, '1bTNpb6s2kqF7GWuSnty9ejl7MIVnP', 'BÃ©bÃ© cadeaux.D', 'https://bit.ly/2rpLFBt', 'S\'inscrie au site', '', 'fr', 0.10, 0.50, 0, 1, '05/07/2018 Ã  10:22:41', 'afflight', 'affinicia', 0, 1, ''),
(69, '2DugFNaqovUGQI51HukOdDaDSlWFRk', 'BÃ©bÃ© cadeaux.C', 'https://bit.ly/2rpLFBt', 'S\'inscrie au site', '', 'fr', 0.10, 0.50, 0, 1, '05/07/2018 Ã  10:22:30', 'afflight', 'affinicia', 0, 1, ''),
(70, 'Cod9ktP61HQdtYjHUIPhLNSoNgf3sZ', 'Eden Park(1)', 'https://bit.ly/2l0r9DK', 'crÃ©e compte et s\'inscrire a la newseltter', '', 'fr', 0.05, 0.50, 0, 1, '09/10/2018 Ã  10:25:13', '1', 'eden park', 0, 1, ''),
(71, 'xOuvmoupdTcUr1TtEsXMFWcFPGEIjr', 'Eden Park(3)', 'https://bit.ly/2l0r9DK', 'crÃ©e compte et s\'inscrire a la newseltter', '', 'fr', 0.05, 0.50, 0, 1, '09/10/2018 Ã  10:25:42', '1', 'eden park', 0, 1, ''),
(72, 'KfvAqjkMzyoNcFzZ1fxVOQ1TpPrweX', 'Eden Park(2)', 'https://bit.ly/2l0r9DK', 'crÃ©e compte et s\'inscrire a la newseltter', '', 'fr', 0.05, 0.50, 0, 1, '09/10/2018 Ã  10:25:28', '1', 'eden park', 0, 1, ''),
(73, 'zazoDZNegB3EcqhVLHCMPibNTpfMQT', 'Le partenaire europeen', 'https://bit.ly/2HzVwtB', 'Remplire Formulaire avec des vrai donnÃ©e sous peine d\'Ãªtre banni', '', 'fr', 1.50, 0.50, 0, 0, '09/06/2018 Ã  14:42:00', '1', 'le partenaire', 0, 1, ''),
(74, 'VcxhZlkrKKQHyn2PWy9cL9Djh5FyU2', 'Vacances ski', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=8a87621d&data1=#IDM', 'S\'insrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'fr', 0.07, 0.90, 0, 1, '02/01/2019 Ã  15:47:12', 'Afflight', 'Vip Concours', 0, 0, ''),
(75, 'nPEYLmxzwgQUqghQcXB7qy2RWE2rXs', 'Les petits kids', 'http://hasofferswall.com/click.php?camp=850&pubid=3&', 'S\'inscrire au site ', '', 'fr', 0.08, 3.00, 0, 1, '28/10/2018 Ã  14:13:36', 'adcoktail', 'BON PLAN KITCHEN TROTTER', 0, 0, ''),
(76, 'APKtPbsEutBIo1Aj9btl19FqO57OCe', 'Bonbox', 'http://hasofferswall.com/click.php?camp=844&pubid=3&', 'S\'inscrire au site ', '', 'fr', 0.07, 0.90, 0, 0, '28/10/2018 Ã  14:06:45', 'tradetracker', 'BON PLAN KITCHEN TROTTER', 0, 0, ''),
(77, 'khulzlUZGbNHU524Xp3IgQLROb2LsP', 'listeoo.A', 'https://listeoo.com/', 'S\'inscrire validÃ©e l\'email+ajouter un services avec tÃ©lÃ©phone,adresse,descriptif du service (attention pas mettre de doublons)', '', 'FR BE', 0.20, 1.00, 0, 0, '21/08/2018 Ã  21:20:48', 'LISTEOO', 'listeoo', 0, 0, ''),
(78, 'cW9mwVmXm6pSvvyKY4SDP34b9Uq4Js', 'listeoo.B', 'www.listeoo.com ', 'S\'inscrire validÃ©e l\'email+ajouter un services (attention pas mettre de doublons)', '', 'fr be', 0.20, 0.20, 0, 0, '05/07/2018 Ã  10:24:49', 'listeoo', 'listeoo', 0, 0, ''),
(79, 'gO6KjMB4JeKqk5cTuxn28I5tcizvlp', 'Meteojob.C', 'https://bit.ly/2NtzHQU', 's\'inscrire au site', '', 'FR', 0.08, 0.50, 0, 0, '13/09/2018 Ã  15:49:16', 'ADCOKTAIL', 'Meteojob', 0, 1, ''),
(80, '93m6m8hap8kUIdEualSHv2FbpXYUfN', 'Distingo', 'https://bit.ly/2rrzi71', 'demande de documentation', 'ituyirtiytdtycyt', 'fr', 0.15, 0.20, 0, 1, '09/08/2019 Ã  15:33:19', 'adcoktail', 'Distingo', 0, 1, ''),
(81, 'lSI6Gg2t65qCBGlatKhH5IlSzPHu9i', 'Distingo A', 'https://bit.ly/2rrzi71', 'Faire une demande de documentation en bas de page ', 'guyryuerd&quot;-(\'', 'fr', 0.15, 0.50, 0, 1, '09/08/2019 Ã  15:33:32', 'adcoktail', 'Distingo', 0, 1, ''),
(82, 'oxC5eEzGYPfIuJ7hwFmRWJ3NODDyVh', 'Bon plan Kitchen trotter', 'https://bit.ly/2Qet7ig', 's\'inscrire ', '', 'fr', 0.10, 0.50, 0, 1, '09/09/2018 Ã  00:13:37', 'adcoktail', 'Bon plan Kitchen trotter', 0, 1, ''),
(83, 'SuwmPhU2XcaudImmQcHmGym8NUBuoo', 'Tentez gagner le nouvel iPad 9.7', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=518e0fd1&data1=#IDM', 'S\'inscrire', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'fr', 0.08, 0.50, 0, 1, '02/01/2019 Ã  15:49:26', 'Afflight', 'toleadoo GmbH', 0, 0, ''),
(84, '13bv4ZmQPcP5NZcQz5t9Ppu1AtLioV', 'Depart de trump', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=b1a330f2&data1=#IDM', 'S\'inscrire au site', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'fr', 0.07, 0.20, 0, 1, '02/01/2019 Ã  15:44:08', 'afflight', 'sondage officiel', 0, 0, ''),
(85, 'Ff1fLQsJ2cKariFYYxWmSwaGB19puc', 'Service militaire', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=5ad851fe&data1=#IDM', 'S\'inscrire au site', '', 'fr', 0.07, 0.20, 0, 1, '13/09/2018 Ã  21:21:02', 'afflight', 'sondage officiel', 0, 0, ''),
(86, '8OVaOSgTDN6zvhQF37caLUAWTi9kDJ', 'Greve sncf', 'https://afflight.postaffiliatepro.com/scripts/c2q2a879kk?a_aid=cameron12300&a_bid=18fd23bd&data1=#IDM', 'S\'inscrire au site', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'fr', 0.07, 0.20, 0, 1, '02/01/2019 Ã  15:45:53', 'afflight', 'sondage officiel', 0, 0, ''),
(87, 'plvh2TVAoNIWYePk2ugqTA1blxlj4A', 'Bureau veritas', 'https://bit.ly/2Qurhdu', 'Faire une estimation par email', '', 'fr', 0.10, 0.50, 0, 0, '11/10/2018 Ã  11:22:45', 'afflight', 'Veritas', 0, 1, ''),
(88, 'NGUDQMcE791TzhBy6Jz4PO4XbdYRlH', 'Coupon network.E', 'https://track.adcocktail.com/c.RChEELAgsRQywCSsEwh&subid=', 'Telecharger 7 coupons', '', 'fr', 0.10, 0.50, 0, 1, '01/10/2018 Ã  12:23:44', 'adcoktail', 'COUPON NETWORK', 0, 0, ''),
(89, 'PKdah83fQZxQGCEbTPJgFq8LY7UWS9', 'Coupon network.F', 'https://track.adcocktail.com/c.RChEELAgsRQywCSsEwh&subid=', 'Telecharger 7 coupons', '', 'fr', 0.10, 0.50, 0, 1, '01/10/2018 Ã  12:23:55', 'adcoktail', 'COUPON NETWORK', 0, 0, ''),
(90, 'lsYrVqZpKdD8r2tFHr8JEba8USfXIm', 'Shopmium(2)', 'https://track.adcocktail.com/c.RChEEQAgsRLywySsEksb&subid=', 'S\'inscrire au site', '', 'fr', 0.10, 0.40, 0, 1, '09/10/2018 Ã  09:50:23', 'adcoktail', 'shop', 0, 0, ''),
(91, '99uJgYAbbeqQsFSHqs5mEUkfH9ARtJ', 'Coupon network', 'https://track.adcocktail.com/c.RChEELAgsRQywCSsEwh&subid=', 'S\'inscrire au site', '', 'fr', 0.15, 0.50, 0, 1, '14/09/2018 Ã  14:36:06', 'adcoktail', 'COUPON NETWORK', 0, 0, ''),
(92, '6gzgTH3HF117FdCpRUXI9oV2VxRu8j', 'Shopmium', 'https://track.adcocktail.com/c.RChEEQAgsRLywySsEksb&subid=', 'S\'inscrire au site', '', 'fr', 0.10, 0.50, 0, 1, '02/10/2018 Ã  11:49:43', 'adcoktail', 'shop', 0, 0, ''),
(93, 'srg7rsHv6JXZdk3HppLCjib69uPg4R', 'Savoir-Maigrir', 'https://bit.ly/2xFeahL', 's\'insrire femme plus de 30 ans ', '', 'fr', 0.10, 0.50, 0, 0, '26/09/2018 Ã  16:42:26', 'tradetracker', 'Savoir maigrir', 0, 1, ''),
(94, 'F6Ewwm75ddzZ2pBt3zLpDdllDb9tUE', 'Savoir-Maigrir', 'https://bit.ly/2NFYepr', 's\'insrire femme plus de 30 ans ', '', 'fr', 0.10, 0.90, 0, 0, '26/09/2018 Ã  16:48:10', 'tradetracker', 'Savoir maigrir', 0, 1, ''),
(95, 'qbjbvCALHX5pqbYQBIVBuH685ElJV5', 'Gagner vacance au caraibes', 'http://hasofferswall.com/click.php?camp=846&pubid=3&', 'S\'inscrire au site ', 'S\'inscrire au site avec des vrai coordonnÃ©e cochez des oui ', 'fr', 0.07, 0.50, 0, 1, '02/01/2019 Ã  15:45:32', 'afflight', 'VIP CONCOURS', 0, 0, ''),
(96, 'vqmpnBR8A1dVCYArDv6tXENAV9qWWi', 'Esmeralda', 'https://bit.ly/2FnEsLC', 'Veuillez vous s\'inscrire avec des vrai infos', '', 'FR', 0.10, 0.50, 0, 0, '14/11/2018 Ã  13:57:35', 'ADCOKTAIL', 'voyance', 1000, 1, ''),
(97, 'NWG1wSgj6g8sNqydXlcqDsruZrxLEU', 'Chris voyance', 'http://hasofferswall.com/click.php?camp=857&pubid=3&', 'S\'inscrire au site ', '', 'fr', 0.10, 0.10, 0, 1, '26/11/2018 Ã  18:23:46', 'adcoktail', 'voyance', 0, 0, ''),
(98, 'Ob8ChjiV31VNzkjnkXRYHWRYJBxQio', 'Alvexo', 'http://hasofferswall.com/click.php?camp=859&pubid=3&', 'S\'inscrire au site ', '', 'fr', 0.15, 0.20, 0, 0, '26/11/2018 Ã  18:27:44', 'adcoktail', 'Alvexo', 0, 0, ''),
(99, 'Hzi8wH48x17PtqxDsAUwR8F4pNE3qz', 'Nous libertins', 'http://hasofferswall.com/click.php?camp=858&pubid=3&', 'S\'inscrire au site  et validÃ©e  email', '', 'fr', 0.15, 0.15, 0, 0, '26/11/2018 Ã  18:28:44', 'adcoktail', 'Nouslibertins', 0, 0, ''),
(100, 'e91ce3882660d425db0e01d7d20e1730', '7777777777777777777777777777', 'https://www.gliing.com/user/orders', 'DGDFGDFGDF', '', 'MG', 10.00, 1.00, 0, 1, '6 oct. 2022 à 11:23', 'FSDFDFSDFSDFSDF', 'SDFSDFSDFDSF', 1, 0, ''),
(101, 'dde9a1edaf4ac732b6b195e72675a03a', 'Offre Madagascar ', 'www.maxcadeau.com,www.ainajh.com', 'Test offre mada', '', 'MDG,FR', 0.07, 0.30, 0, 1, '10 oct. 2022 à 14:47', '', '', 2, 1, ''),
(102, 'db4c8d055cc60c494db229b14d12628d', 'twitch', 'https://www.twitch.tv/wallytwitchtv', 'twitch', 'twitch', 'FR', 1.00, 1.00, 0, 1, '11 oct. 2022 à 8:7', '', '', 0, 1, ''),
(103, '1114d2b13eae24c6ff8f1f0c4e487bc9', 'Fetra test', 'https://217.160.56.137:8443/modules/nodejs/index.php/domain/index/site_id/1', 'Juste description', '', '', 0.40, 0.50, 0, 1, '2022-10-29 18:06:21.185', '', '', 0, 0, 'images_1667066780675.png');

-- --------------------------------------------------------

--
-- Structure de la table `tchat`
--

CREATE TABLE `tchat` (
  `id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idUser` varchar(50) NOT NULL,
  `message` mediumtext NOT NULL,
  `date` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `tchat`
--

INSERT INTO `tchat` (`id`, `time`, `idUser`, `message`, `date`) VALUES
(1, '0000-00-00 00:00:00', 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 'vhhfhf', '2023-09-29T11:04:01.487Z');

-- --------------------------------------------------------

--
-- Structure de la table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `hashId` varchar(50) DEFAULT NULL,
  `type_message` varchar(20) DEFAULT NULL,
  `employe_respond` varchar(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'EN ATTENTE',
  `user` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `reponse` longtext DEFAULT NULL,
  `vu` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `hashId` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mdp` varchar(250) NOT NULL,
  `nom` varchar(250) NOT NULL,
  `prenom` varchar(250) NOT NULL,
  `adresse` text DEFAULT NULL,
  `ville` varchar(250) DEFAULT NULL,
  `codePostal` varchar(50) DEFAULT NULL,
  `pays` varchar(250) NOT NULL,
  `pmessage` varchar(3000) DEFAULT NULL,
  `euros` decimal(20,6) DEFAULT NULL,
  `euros_histo` decimal(15,2) DEFAULT 0.00,
  `ip` varchar(250) NOT NULL,
  `actif` int(11) DEFAULT 0,
  `level` int(11) DEFAULT 1,
  `premium` int(11) DEFAULT 0,
  `idParrain` int(11) DEFAULT NULL,
  `eurosParrain` decimal(15,3) DEFAULT NULL,
  `barrePrcnt` decimal(15,2) DEFAULT NULL,
  `barrePrcntNb` int(11) DEFAULT NULL,
  `banni` int(11) DEFAULT NULL,
  `banni_chat` int(11) DEFAULT NULL,
  `iban` varchar(250) DEFAULT NULL,
  `swift` varchar(250) DEFAULT NULL,
  `paypal` varchar(250) DEFAULT NULL,
  `skrill` varchar(250) DEFAULT NULL,
  `code_verif` varchar(50) DEFAULT NULL,
  `code_verif_date` varchar(250) DEFAULT NULL,
  `ident_recto` text DEFAULT NULL,
  `ident_verso` text DEFAULT NULL,
  `ident_verif` int(11) DEFAULT NULL,
  `datelastco` date DEFAULT NULL,
  `ticketTombola` int(11) DEFAULT 0,
  `news` int(11) DEFAULT NULL,
  `avertissement` int(11) DEFAULT 0,
  `profileImage` varchar(100) DEFAULT NULL,
  `completedAccount` tinyint(1) DEFAULT NULL,
  `completedProfile` tinyint(1) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `identityCardRecto` varchar(200) DEFAULT NULL,
  `identityCardVerso` varchar(200) DEFAULT NULL,
  `addressCard` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `hashId`, `email`, `mdp`, `nom`, `prenom`, `adresse`, `ville`, `codePostal`, `pays`, `pmessage`, `euros`, `euros_histo`, `ip`, `actif`, `level`, `premium`, `idParrain`, `eurosParrain`, `barrePrcnt`, `barrePrcntNb`, `banni`, `banni_chat`, `iban`, `swift`, `paypal`, `skrill`, `code_verif`, `code_verif_date`, `ident_recto`, `ident_verso`, `ident_verif`, `datelastco`, `ticketTombola`, `news`, `avertissement`, `profileImage`, `completedAccount`, `completedProfile`, `status`, `identityCardRecto`, `identityCardVerso`, `addressCard`) VALUES
(4, 'e362e039-c91e-48ae-89cd-fa5f04c83cae', 'julefredo57@gmail.com', '$2b$10$XzuZAKgGZh7dhVgLlCsSG.XeIQbMbMtX4AZk4UIKbbgphjcibgFWS', 'ANNIE', 'MASSON', '', '', '', 'FR', '', 940.100000, 0.00, '86.206.25.233', 1, 99, 0, NULL, 0.000, 0.00, 0, 0, 0, 'fsdfsdfsd', 'dsfsdfdsfsd', 'julefredo57@gmail.com', '', '', '', '', '', 0, '0000-00-00', 0, 0, 0, 'images_1695393422104.png', 1, NULL, 'ACCEPTED', 'images_1695393194486.png', 'images_1695393194547.png', 'images_1695393194609.png'),
(9, 'aefeb593-8ed8-4206-afce-0913ad2c4366', 'dyosby237@gmail.com', '$2b$10$DHIW/EQIz3k085x2RdW7eexXzCXsBU41/eocf4v5bJkQmCczMULv2', 'obby', 'Sidane ', NULL, NULL, NULL, 'FR', NULL, NULL, 0.00, '195.83.211.138', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `avertissements`
--
ALTER TABLE `avertissements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `boutique`
--
ALTER TABLE `boutique`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `boutiqueCategorie`
--
ALTER TABLE `boutiqueCategorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `boutiqueMontant`
--
ALTER TABLE `boutiqueMontant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pays` (`pays`),
  ADD KEY `actif` (`actif`),
  ADD KEY `nom` (`nom`);

--
-- Index pour la table `gagnants`
--
ALTER TABLE `gagnants`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `histo_offers`
--
ALTER TABLE `histo_offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idt` (`idt`),
  ADD KEY `date` (`date`),
  ADD KEY `etat` (`etat`),
  ADD KEY `ip` (`ip`),
  ADD KEY `idm` (`idUser`);

--
-- Index pour la table `messagerie`
--
ALTER TABLE `messagerie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pays` (`pays`),
  ADD KEY `actif` (`actif`),
  ADD KEY `nom` (`nom`),
  ADD KEY `annonceur` (`annonceur`);

--
-- Index pour la table `tchat`
--
ALTER TABLE `tchat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `avertissements`
--
ALTER TABLE `avertissements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `boutique`
--
ALTER TABLE `boutique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `boutiqueCategorie`
--
ALTER TABLE `boutiqueCategorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `boutiqueMontant`
--
ALTER TABLE `boutiqueMontant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `gagnants`
--
ALTER TABLE `gagnants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT pour la table `histo_offers`
--
ALTER TABLE `histo_offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `messagerie`
--
ALTER TABLE `messagerie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT pour la table `tchat`
--
ALTER TABLE `tchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
