import { Game } from "./app/types/Game";

export const games: Game[] = [
	{
		title: "Persona 5",
		score: 9,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 2,
		imageUrl:
			"https://howlongtobeat.com/games/Persona5visual.jpg?width=250",
		categoryScores: {
			fun: 6,
			gameplay: 6,
			graphics: 9,
			music: 9,
			story: 7.5,
		},
		review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		title: "AI: The Somnium Files",
		score: 9,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/65827_AI_The_Somnium_Files.jpg?width=250",
	},
	{
		title: "Borderlands The Pre-Sequel",

		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Borderlands_The_Pre-Sequel_box_art.jpg?width=250",
	},
	{
		title: "Elden Ring",
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/68151_Elden_Ring.jpg?width=250",
		review: "Too difficult for me.<br><br> I also don't like the setting/story/open world/gameplay. <br><br> Souls-like games are not for me.",
	},
	{
		title: "Genshin Impact",
		score: 7.8,
		tags: ["Singleplayer", "Multiplayer", "Live Service", "Gatcha"],
		imageUrl:
			"https://howlongtobeat.com/games/68133_Genshin_Impact.jpg?width=250",
	},
	{
		title: "Honkai: Star Rail",
		score: 8.1,
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		imageUrl:
			"https://howlongtobeat.com/games/109100_Honkai_Star_Rail.png?width=250",
	},
	{
		title: "Zenless Zone Zero",
		score: 7.8,
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		imageUrl:
			"https://howlongtobeat.com/games/109101_Zenless_Zone_Zero.png?width=250",
	},
	{
		title: "Fate/Grand Order",
		score: 7.5,
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		imageUrl:
			"https://howlongtobeat.com/games/36059_FateGrand_Order.jpg?width=250",
	},
	{
		title: "Fate/Stay Night",
		score: 8.9,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/3416_FateStay_Night.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		review: "Comfy 96 hours reading.",
	},
	{
		title: "Fate/Hollow Ataraxia",
		score: 8,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/FateHollowAtaraxia4713.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		review: "The main story gets separated by a lot of slice of life stuff and I almost forgot it.",
	},
	{
		title: "Tsukihime (2000)",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/FateHollowAtaraxia4713.jpg?width=250",
		status: "In Progress",
		review: "I've read the Arcueid route. I should continue with the other routes before I get the remake.",
	},
	{
		title: "Fate/Extella: The Umbral Star",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/43007_FateExtella_The_Umbral_Star.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		score: 6.9,
		review: "The combat is boring (and also the story).",
	},
	{
		title: "Fate/Extella Link",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/65589_FateExtella_Link.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		score: 7.5,
		review: "Way better than the first one.",
	},
	{
		title: "Azur Lane",
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		score: 6.5,
		imageUrl:
			"https://howlongtobeat.com/games/60929_Azur_Lane.jpg?width=250",
		review: "The only good thing about this game are the characters (and the fan-art).",
	},
	{
		title: "Arknights",
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		score: 6.5,
		imageUrl:
			"https://howlongtobeat.com/games/74683_Arknights.jpg?width=250",
		status: "Dropped",
		review: "Interesting setting and mood, but the gameplay is not for me. <br><br> Played the first 3 hours and dropped it. <br><br> Watched the first season of the anime.",
	},
	{
		title: "Girls' Frontline",
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		score: 6.3,
		imageUrl:
			"https://howlongtobeat.com/games/67112_Girls_Frontline.png?width=250",
		status: "Dropped",
		review: "Played for a week and dropped it. The gameplay is boring and mobily-gameish. <br><br> Waiting for the sequel to come out.",
	},
	{
		title: "NIKKE: The Goddess of Victory",
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		score: 7.3,
		imageUrl:
			"https://howlongtobeat.com/games/115666_GODDESS_OF_VICTORY_NIKKE.jpg?width=250",
		review: 'Decent gameplay and story. <br><br> The gatcha is strangely easy (idk???). <br><br> It gets a lot more "difficoult" from chapter 23 onwards. <br><br> The story tries to get itself seriously, but the character design (and english VA) stick out a little bit too much (not that I mind).',
	},
	{
		title: "Minecraft (Java)",
		score: 8.5,
		tags: ["Singleplayer", "Multiplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/256px-Minecraft_1.1_Title.png?width=250",
	},
	{
		title: "Factorio",
		score: 7,
		tags: ["Singleplayer", "Endless"],
		imageUrl: "https://howlongtobeat.com/games/Factorio.jpg?width=250",
	},
	{
		title: "PowerWash Simulator",
		score: 7,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/92511_PowerWash_Simulator.jpg?width=250",
		review: "Relaxing.",
	},
	{
		title: "Mario Kart Wii",
		score: 8.5,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/5637_Mario_Kart_Wii.jpg?width=250",
	},
	{
		title: "Mario Kart 7 (3DS)",
		score: 7.9,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/5634_Mario_Kart_7.png?width=250",
	},
	{
		title: "Star Citizen",
		tags: ["Multiplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/AMD-Star-Citizen.jpg?width=250",
	},
	{
		title: "Battlefield: Bad Company 2",
		score: 6,
		status: "Dropped",
		tags: ["Singleplayer", "Multiplayer"],
		imageUrl: "https://howlongtobeat.com/games/Bc2lowres.jpg?width=250",
	},
	{
		title: "Battlefield 4",
		score: 7.9,
		tags: ["Singleplayer", "Multiplayer"],
		imageUrl: "https://howlongtobeat.com/games/Battlefield_4.jpg?width=250",
	},
	{
		title: "Battlefield Hardline",
		score: 7.7,
		tags: ["Singleplayer", "Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Battlefield_Hardline.jpg?width=250",
	},
	{
		title: "Battlefield 1",
		score: 7.7,
		tags: ["Singleplayer", "Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/38001_Battlefield_1.jpg?width=250",
	},
	{
		title: "BioShock",
		score: 7.5,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Bioshockcoverfinalcropped.jpg?width=250",
	},
	{
		title: "Black Mesa",
		score: 8,
		status: "Completed",
		timesCompleted: 1.75,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/1100_Black_Mesa.jpg?width=250",
	},
	{
		title: "Boneworks",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer", "VR"],
		imageUrl:
			"https://howlongtobeat.com/games/69535_BONEWORKS.jpg?width=250",
	},
	{
		title: "Borderlands 2",
		score: 2,
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Borderlands2boxart3.jpg?width=250",
	},
	{
		title: "Cities: Skylines",
		score: 7,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/Cities_Skylines_cover_art.jpg?width=250",
	},
	{
		title: "Counter-Strike: Global Offensive (and 2)",
		score: 6,
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/1957_Counter-Strike_2.jpg?width=250",
		review: "Not for me.",
	},
	{
		title: "Control",
		status: "To Play",
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/57507_Control.jpg?width=250",
	},
	{
		title: "Cyberpunk 2077",
		score: 7.5,
		status: "In Progress",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Cyberpunk-2077-2.jpg?width=250",
		review: "Tecnically the first playthrough is not finished. The story is meh, but the gameplay is fun.",
	},
	{
		title: "Death Stranding",
		score: 8.5,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/38061_Death_Stranding.jpg?width=250",
	},
	{
		title: "Deponia (+ Doomsday)",
		score: 7.8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/2448_Deponia.jpg?width=250",
		review: "It's a shame that the company closed down because of Gollum.",
	},
	{
		title: "Destiny 2",
		score: 6,
		status: "Completed",
		tags: ["Singleplayer", "Multiplayer", "Live Service"],
		imageUrl:
			"https://howlongtobeat.com/games/43894_Destiny_2.png?width=250",
	},
	{
		title: "Devil May Cry 5",

		status: "To Play",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/57514_Devil_May_Cry_5.jpg?width=250",
		review: "The controls and combos are difficoult to remember.",
	},
	{
		title: "Doki Doki Literature Club",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/49377_Doki_Doki_Literature_Club.jpg?width=250",
	},
	{
		title: "Doom (2016)",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/doom_2016.jpg?width=250",
	},
	{
		title: "Doom Eternal",
		score: 8.5,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/57506_Doom_Eternal.jpg?width=250",
	},
	{
		title: "The Elder Scrolls V: Skyrim",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/TheElderScrollsVSkyrimLegendaryEdition.jpg?width=250",
		review: "A lot of mods.",
	},
	{
		title: "Elite Dangerous",
		score: 9,
		tags: ["Singleplayer", "Multiplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/EliteDangerous.jpg?width=250",
	},
	{
		title: "Euro Truck Simulator 2",
		score: 7.5,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/Euro_Truck_Simulator_2_cover.jpg?width=250",
	},
	{
		title: "Fallout 4",
		score: 7.7,
		status: "Completed",
		timesCompleted: 2,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/Fallout_4.jpg?width=250",
	},
	{
		title: "Fallout: New Vegas",

		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/3351_Fallout_New_Vegas.jpg?width=250",
	},
	{
		title: "The First Descendant",
		score: 5,
		tags: ["Live Service"],
		imageUrl:
			"https://howlongtobeat.com/games/115058_The_First_Descendant.jpg?width=250",
		review: "Too grindy and poor performance.",
	},
	{
		title: "Game Dev Tycoon",
		score: 6.9,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/2481853-box_gdt.png?width=250",
	},
	{
		title: "Garry's Mod",
		score: 8.5,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/GarrysMod_292x136.jpg?width=250",
		review: "A lot of mods.",
	},
	{
		title: "God Eater 3",
		score: 4,
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/64937_God_Eater_3.jpg?width=250",
	},
	{
		title: "Ghost Runner",
		status: "To Play",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/69898_Ghostrunner.jpg?width=250",
		review: "I've played it for a bit, but my save got deleted. Thanks, Epic Games.",
	},
	{
		title: "Rage 2",
		status: "Dropped",
		score: 4,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/58031_Rage_2.jpg?width=250",
		review: "Boring.",
	},
	{
		title: "The Sims 4",
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/The_Sims_4_Box_Art.jpg?width=250",
		review: "A lot of DLCs are needed to make the game fun.",
	},
	{
		title: "PC Building Simulator",
		score: 7,
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/55219_PC_Building_Simulator.jpg?width=250",
	},
	{
		title: "Tropico 5",
		tags: ["Singleplayer", "Endless"],
		imageUrl: "https://howlongtobeat.com/games/Tropico5.jpg?width=250",
	},
	{
		title: "Titanfall",
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/16621_Titanfall.jpg?width=250",
		score: 8,
	},
	{
		title: "Titanfall 2",
		tags: ["Multiplayer", "Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/38000_Titanfall_2.jpg?width=250",
		score: 9,
	},
	{
		title: "Apex Legends",
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/64753_Apex_Legends.jpg?width=250",
		review: "Battle Royales are not for me.",
	},
	{
		title: "Need for Speed Heat",
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/69695_Need_For_Speed_Heat.png?width=250",
		score: 6.5,
		review: "Kinda boring.",
	},
	{
		title: "Grand Theft Auto IV",

		status: "In Progress",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/4062_Grand_Theft_Auto_IV.png?width=250",
	},
	{
		title: "Grand Theft Auto V",
		score: 8,
		status: "Completed",
		timesCompleted: 2,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/4064_Grand_Theft_Auto_V.jpg?width=250",
	},
	{
		title: "Grand Theft Auto: San Andreas",

		status: "In Progress",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/4073_Grand_Theft_Auto_San_Andreas.jpg?width=250",
	},
	{
		title: "Hacknet",
		score: 7.9,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Hacknet_header.jpg?width=250",
	},
	{
		title: "Half-Life",
		score: 7.8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/256px-Half-Life_Cover_Art.jpg?width=250",
		review: "Revolutionary game for it's time, but the last part is not good.",
	},
	{
		title: "Half-Life: Blue Shift",
		score: 7.8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/250px-Half-Life_Blue_Shift_box.jpg?width=250",
	},
	{
		title: "Half-Life: Opposing Force",
		score: 7.8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/250px-Half-Life_Opposing_Force_box.jpg?width=250",
	},
	{
		title: "Half-Life 2",
		score: 8.2,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/256px-421px-HL2box.jpg?width=250",
	},
	{
		title: "Half-Life 2: Episode One",
		score: 8.1,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Image-HL2EP1cover.jpg?width=250",
	},
	{
		title: "Half-Life 2: Episode Two",
		score: 8.2,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Half-Life_2_Episode_Two_title.jpg?width=250",
	},
	{
		title: "Half-Life Alyx",
		score: 8.5,
		status: "Completed",
		timesCompleted: 1.5,
		tags: ["Singleplayer", "VR"],
		imageUrl:
			"https://howlongtobeat.com/games/72067_Half-Life_Alyx.jpg?width=250",
	},
	{
		title: "A Hat in Time",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/A_Hat_in_Time_logo.png?width=250",
		review: "Cute.",
	},
	{
		title: "Helltaker",
		score: 7.5,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/78118_Helltaker.jpg?width=250",
	},
	{
		title: "Hitman 1 (2016)",
		score: 7.7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/26831_Hitman.jpg?width=250",
	},
	{
		title: "Hitman 2 (2018)",
		score: 7.7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/57478_Hitman_2.jpg?width=250",
	},
	{
		title: "Homeworld Remastered Collection",
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Homeworld_Remastered_Collection_header.jpg?width=250",
	},
	{
		title: "Hot Dogs, Horseshoes & Hand Grenades",
		tags: ["Singleplayer", "Endless", "VR"],
		score: 7.8,
		imageUrl:
			"https://howlongtobeat.com/games/40366_Hot_Dogs_Horseshoes_&_Hand_Grenades.jpg?width=250",
	},
	{
		title: "Hotline Miami 2: Wrong Number",
		tags: ["Singleplayer"],
		status: "To Play",
		imageUrl:
			"https://howlongtobeat.com/games/HotlineMiami2WrongNumber.jpg?width=250",
	},
	{
		title: "Just Cause 3",
		score: 7.8,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 2,
		imageUrl:
			"https://howlongtobeat.com/games/Just_Cause_3_cover_art.jpg?width=250",
	},
	{
		title: "Lego City Undercover",
		score: 7.7,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/LegoCityUndercover.jpg?width=250",
		review: "100%",
	},
	{
		title: "Lego The Hobbit",
		score: 7,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl: "https://howlongtobeat.com/games/LegoTheHobbit.jpg?width=250",
	},
	{
		title: "Lego The Lord of the Rings (WII)",
		score: 7,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/220px-Lego_Lord_of_the_Rings_cover.jpg?width=250",
	},
	{
		title: "The Lego Movie Videogame",
		score: 6.5,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/The_Lego_Movie_Videogame_cover.jpg?width=250",
	},
	{
		title: "Max Payne 3",
		score: 7.2,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/256px-Maxpayne3.jpg?width=250",
	},
	{
		title: "Metal Gear Rising: Revengeance",
		score: 7.5,
		tags: ["Singleplayer"],
		status: "Dropped",
		timesCompleted: 0.8,
		imageUrl:
			"https://howlongtobeat.com/games/5905_Metal_Gear_Rising_Revengeance.jpg?width=250",
		review: "Almost finished, but the long hiatus made me forget the controls.",
	},
	{
		title: "Metal Gear Solid V: The Phantom Pain",
		score: 7.4,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/MetalGearSolid5_2013.jpg?width=250",
	},
	{
		title: "Mirror's Edge Catalyst",
		score: 7.7,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/19181_Mirrors_Edge_Catalyst.jpg?width=250",
		review: "100%",
	},
	{
		title: "NieR Replicant ver.1.22474487139...",
		score: 7,
		tags: ["Singleplayer"],
		status: "In Progress",
		imageUrl:
			"https://howlongtobeat.com/games/76406_NieR_Replicant_ver122474487139.jpg?width=250",
		review: "I adore NieR Automata, but this one is not as good. Too grindy with extremely boring sidequests.<br><br> Finished ending A. <br><br> I did not have fun.",
	},
	{
		title: "NieR: Automata",
		score: 9,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/38029_Nier_Automata.jpg?width=250",
	},
	{
		title: "No Man's Sky",
		score: 8,
		tags: ["Singleplayer", "Endless"],
		status: "Completed",
		timesCompleted: 2,
		imageUrl:
			"https://howlongtobeat.com/games/No_Mans_Sky_logo.png?width=250",
	},
	{
		title: "Outer Wilds",
		score: 9,
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/57527_Outer_Wilds.jpg?width=250",
		review: "No DLC.",
	},
	{
		title: "Payday 2",
		score: 7.8,
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/12649_Payday_2.jpg?width=250",
	},
	{
		title: "PlanetSide 2",
		score: 7,
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/PlanetSide_2_Logo.jpg?width=250",
	},
	{
		title: "Portal",
		score: 8.2,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/256px-Portal_standalonebox.jpg?width=250",
	},
	{
		title: "Portal 2",
		score: 8.2,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1,
		imageUrl: "https://howlongtobeat.com/games/Portal2cover.jpg?width=250",
	},
	{
		title: "Portal Stories: Mel",
		score: 8,
		status: "Completed",
		tags: ["Singleplayer", "Mod"],
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/Portal_Stories_Mel_header.jpg?width=250",
	},
	{
		title: "Portal Reloaded",
		status: "Dropped",
		tags: ["Singleplayer", "Mod"],
		imageUrl:
			"https://howlongtobeat.com/games/91358_Portal_Reloaded.jpg?width=250",
		review: "Too difficult for me.",
	},
	{
		title: "Severed Steel",
		score: 8,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1.8,
		imageUrl:
			"https://howlongtobeat.com/games/89786_Severed_Steel.jpg?width=250",
	},
	{
		title: "Snowbreak: Containment Zone",
		tags: ["Singleplayer", "Live Service", "Gatcha"],
		imageUrl:
			"https://howlongtobeat.com/games/89786_Severed_Steel.jpg?width=250",
	},
	{
		title: "Space Engineers",
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/Space_Engineers.jpg?width=250",
		review: "Too difficult for me.",
	},
	{
		title: "Subnautica",
		score: 8.2,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/23740_Subnautica.jpg?width=250",
		review: "No DLC.",
	},
	{
		title: "The Talos Principle",
		score: 7.8,
		status: "Dropped",
		timesCompleted: 0.75,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/TheTalosPrinciple.jpg?width=250",
		review: "It was fun, but it got strangely depressing for me and I dropped it.",
	},
	{
		title: "Team Fortress 2",
		score: 7.5,
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/131943_Snowbreak_Containment_Zone.jpg?width=250",
	},
	{
		title: "TheDawn",
		score: 7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/87311_TheDawn.jpg?width=250",
		review: "Nice small one-person indie game (just an hour).",
	},
	{
		title: "Tower Unite",
		tags: ["Multiplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/39320_Tower_Unite.jpg?width=250",
	},
	{
		title: "Unturned",
		tags: ["Multiplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/Unturned_292x136.jpg?width=250",
	},
	{
		title: "VRChat",
		tags: ["Multiplayer", "Endless"],
		imageUrl: "https://howlongtobeat.com/games/43639_VrChat.jpg?width=250",
	},
	{
		title: "Warframe",
		status: "Completed",
		timesCompleted: 1,
		tags: ["Multiplayer", "Endless"],
		imageUrl: "https://howlongtobeat.com/games/Warframe.jpg?width=250",
		review: "My muscle memory got annihilated by the control revamp in 2020. Too much confusing F2P-type content to return.",
	},
	{
		title: "Watch Dogs",
		score: 7.6,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/watch_dogs.jpg?width=250",
	},
	{
		title: "Watch Dogs 2",
		score: 7.6,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/37861_Watch_Dogs_2.jpg?width=250",
	},
	{
		title: "The Witcher 3: Wild Hunt (+ DLCs)",
		score: 9,
		status: "Completed",
		timesCompleted: 1.75,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg?width=250",
	},
	{
		title: "X4 Foundations",
		score: 8,
		tags: ["Singleplayer", "Endless"],
		timesCompleted: 3,
		imageUrl:
			"https://howlongtobeat.com/games/62872_X4_Foundations.jpg?width=250",
	},
	{
		title: "Yakuza 0",
		score: 8.8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/43056_Yakuza_0.jpg?width=250",
	},
	{
		title: "Yakuza Kiwami",
		score: 8.7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/39484_Ryu_ga_Gotoku_Kiwami.jpg?width=250",
	},
	{
		title: "Yakuza Kiwami 2",
		score: 8.7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/49620_Yakuza_kiwami_2.png?width=250",
	},
];
