import { Game } from "./app/types/Game"

export const links: { name: string; url: string }[] = [
	{
		name: "Twitter",
		url: "https://x.com/Sky_9911",
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/skye91.bsky.social",
	},
	{
		name: "GitHub Issues",
		url: "https://github.com/Skye-91/skye-page/issues",
	},
	{
		name: "Steam",
		url: "https://steamcommunity.com/profiles/76561198157574878",
	},
]

// 	categoryScores: {
// 		fun: 6,
// 		gameplay: 8,
// 		graphics: 9,
// 		music: 9,
// 		story: 7,
// 	},
// 	review: {
// 		overview: ``,

// 		artDirection: ``,

// 		gameplay: ``,

// 		graphics: ``,

// 		music: ``,

// 		performance: ``,

// 		story: ``,
// 	},

export const games: Game[] = [
	{
		title: "Persona 5",
		score: 9.2,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 2,
		imageUrl:
			"https://howlongtobeat.com/games/Persona5visual.jpg?width=250",
		categoryScores: {
			fun: 6,
			gameplay: 8,
			graphics: 9,
			music: 9,
			story: 7,
		},
		review: {
			overview: `
I've only played the base version of Persona 5 on my PS4 in 2017.

*It's basically one of my favorite games ever*, even tough it has passed a long time since I have played it.

**It has some flaws**, but it's really good from what I can remember.

I don't know if I'm going to play the Royale version on PC.`,

			artDirection: `
I really love the visual theme of this game. 

From the stylish menu UI, to the red and black theme, it's really good looking.`,

			gameplay: `I'm not a fan of _turn based_ RPJs or JRPGs, but this one introduced me to these genres. But I had fun exploring the various dungeons.`,

			graphics: `The graphics are nice and clean (at least on the PS4 version), especially compared to the previous games' cartoony-like visuals.`,

			music: `
Hands down, the best aspect about this game. It's a mix of jazz for the quiet times, and rock for combat.

It has really nice tunes and vocals and the relaxing themes are really good.`,

			performance: `I had no performance issues.`,

			story: `
I don't remember many details of the story, but when I played it, I thought it was nice.

If I played it again now, I would most likely find some things that I'm not ok with.

For what I remember, around September-October (in game), there is a new character introduced, but it hasn't been used much, most likely because it was almost the end of the game (in December).

But, other than that, the main cast is actually quite good and interesting.
`,
		},
	},
	{
		title: "ANNO: Mutationem",
		score: 8,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/81835_ANNO_Mutationem.jpg?width=250",
		categoryScores: {
			fun: 8,
			gameplay: 7,
			graphics: 8,
			music: 7,
			story: 7,
		},
		review: {
			overview: `A nice indie cyberpunk platformer.`,
			
			artDirection: `Very good. The two main cities in the game are very detailed. 

It's obviously inspired by Cyberpunk 2077, but it's fine.
`,
			
			gameplay: `
Relatively simple combat mechanics. 

The only problem I had with it, is that on a controller, you can't select a consumable and move at the same time, so I stumbled up a couple of times. 

The difficoulty is adequate.`,
			
			graphics: `Good.`,
			
			music: `
Cyberpunk/Synth soundtrack.

There are some cute tracks here and there. These are the ones that I like the most:
- Skopp
- Ann's Home
- Margaritia
- Rooftop
`,
			
			performance: `Works good.`,
			
			story: `It's ok.`,
		},
	},
	{
		title: "AI: The Somnium Files",
		score: 9.2,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer", "VN"],
		imageUrl:
			"https://howlongtobeat.com/games/65827_AI_The_Somnium_Files.jpg?width=250",
		categoryScores: {
			fun: 9,
			gameplay: 7,
			graphics: 7,
			music: 8,
			story: 9,
		},
		review: {
			overview: `A very interesting and fun visual novel game.`,

			artDirection: `The character design and the design of the dreams are quite good.`,

			gameplay: `
It's some sort of breed between a VN and a point-and-click game.

It also has different timelines and endings, that culminate in a single canonical one.`,

			graphics: `Nice and clean.`,

			music: `It definitely suits the dream-like experiences that you go through the game.`,

			performance: `I had no issues on PC.`,

			story: `
The best part of this game.

I found it's writing to be quite funny.

The final ending (despite the cringy ending song) is also good.`,
		},
	},
	{
		title: "Borderlands The Pre-Sequel",
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/Borderlands_The_Pre-Sequel_box_art.jpg?width=250",
		review: {
			overview: `I just found it very boring after 2-3 hours of gameplay.`,
		},
	},
	{
		title: "Elden Ring",
		status: "Dropped",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/68151_Elden_Ring.jpg?width=250",
		review: {
			overview: `
I don't like souls-like games, and this is not an exception.

It's just too difficult and frustrating for me.

I also don't like the setting/story/open world/gameplay/controls.

I dropped it after the first 3-4 hours.`,
		},
	},
	{
		title: "Genshin Impact",
		score: 7.3,
		status: "On Hold",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		imageUrl:
			"https://howlongtobeat.com/games/68133_Genshin_Impact.jpg?width=250",
		categoryScores: {
			fun: 7,
			gameplay: 5,
			graphics: 7,
			music: 8,
			story: 2,
		},
		review: {
			overview: `MiHoYo's giant cash cow... I have a lot to say about this and other gacha games...

I'll begin with the big thing, the gacha, but I'll be brief about it.

**Premise: On every gacha I've played, I've always been a F2P. And it will not change anytime soon.**

I simply don't like wasting money for a _small chance_ of getting a character (or equipment), and I consider this genre of live-service games to be a subset of _pay-to-win games_.

Yes, there are some good things that can be done without spending money, just with what the game gives you, but it's just not comparable to a META approach. It's just a ploy to get you to spend money on their virtual slot-machines.

Luckily, I was not addicted to this style of playing gachas, and I saved, planned and speculated on upcoming banners.

**I consider a gacha to be "beaten" when:** I have all the characters that I like/want (optional) or I have at least one good and reliable way to beat most of the _primary game content_ (e.g. story)

I can say that I have "beaten" every gacha game that I actually "like", if I stay by that definition.`,

			artDirection: `It's actually quite good.

The character design is kinda over the top (or kinda boring, it depends), but i have no real problems with that.

All of the nations that are currently in the game look very distinct and there a lot of beautiful spots.

I often reach a peak of a mountain or a hill, and just stand there, admiring the beautiful landscape.

This is definitely one of the two selling points of Genshin. The other being the exploration gameplay.`,

			gameplay: `The combat is ok.

The best thing about the gameplay is the exploration. There are A LOT of things to do.

Even though it is mostly minigames, just the act of unlocking the various teleporters spread across the map and admiring the sceneries is fun enough for me.

**BUT** the caveat of this game is the character progression and acquisition. Being a gacha, you must GRIND, GRIND and GRIND EVEN MORE to make your character strong enough for the game content.

There is also an "end-game" mode (Abyss) where it is necessary to have multiple teams ready and in top performance. It's optional, but it hands out *some extra* currency for the gacha. I recommend staying away from it anyway.
`,

			graphics: `It's ok, if a little simple. Just enable the bloom and set everything to the max and it's better.`,

			music: `It's pretty good and fit the aesthetics of the place you're currently in.

The nice orchestra elevates this soundtrack by a lot.`,

			performance: `Runs at 60 fps on high, with *some* frame drops.`,

			story: `This is my least favorite part of the game.

There is just *something* that irks me about it... I can't precisely figure out what is it, but the main thing I've noticed is that there is a *clear distinction* between the "good" and the "bad" guys. 
With just *a couple* of exceptions. This creates some "childish" storytelling.

One other thing is that MiHoYo seems to not know how to write endings. The most important case is the end of the Inazuma chapter. It was that bad.

I've finished up until Fontaine (the fifth nation) and it was the best it could offer.

I really don't like the cardboard cutout that is the MC.
`,
		},
	},
	{
		title: "Honkai: Star Rail",
		score: 8,
		status: "On Hold",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		imageUrl:
			"https://howlongtobeat.com/games/109100_Honkai_Star_Rail.png?width=250",

		categoryScores: {
			fun: 7,
			gameplay: 2,
			graphics: 7,
			music: 8,
			story: 9,
		},
		review: {
			overview: `MiHoYo's second gacha game that I've played.

I actually like this game, despite being a gacha AND a turn based RPG... a deadly combination. 

Maybe it's because of my bias for sci-fi over fantasy... and the latest *main* story chapters.

To know my stance on gacha games, see the Genshin Impact review.

In this game I got extremely lucky with the pulls and I've "beaten" this game in about a single year (considering the months of on-off).
`,

			artDirection: `It's pretty good, even better than Genshin's.

The character design is still kinda over the top, but this time there are no boring ones.

The only "world" that I like is "Herta's Space Station" (the "tutorial" one) and I really want to see some more space stuff! This is a sci-fi game, damnit!

Even tho, Penacony (the latest world) is also good-looking... especially the Dream's Edge... it's just too good for me to not mention it. The dreamy music, the sunset in the horizon, that daze that you can feel in this level is really good...
`,

			gameplay: `The combat is... meh... and the worst part of this game, for me. 

Being a gacha turn based RPG, it has a lot of META and speculation around characters (way more than Genshin and ZZZ), since you really need all the advantages you can get in this type of game.

The exploration of the maps is quite limited.

Also, the main problem of the grind is still there.
`,

			graphics: `It seems to be improved from Genshin Impact, even if it's really similar in some of the UI and other things.`,

			music: `Basically on par with Genshin's music, it's just a change of genre.`,

			performance: `Runs at 60 fps on high, with *some* frame drops.`,

			story: `This is the best part of the game for me.

It's the only MiHoYo game with a story that I can stand, even if the endings are still... not exactly good. But it's a clear improvement!

The latest main story chapter is actually *really really good (even considering the problem above)!* 

But *the filler in between the main story is very boring*, and I basically skimmed it trough quickly without giving it second thoughts.

The characters are well written. Also, they actually gave the MC *some* personality, even if minor (it gets shown from *some* dialog options and mostly in Penacony's story).

My list of favorite worlds by story is:
1. Penacony
2. Herta's Space Station
3. Xianzhou Luofu
4. Jarilo VI
`,
		},
	},
	{
		title: "Zenless Zone Zero",
		score: 7.5,
		status: "In Progress",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		imageUrl:
			"https://howlongtobeat.com/games/109101_Zenless_Zone_Zero.png?width=250",
		categoryScores: {
			fun: 7,
			gameplay: 8,
			graphics: 8,
			music: 8,
			story: 4,
		},
		review: {
			overview: `MiHoYo's third gacha game that I've played.

To know my stance on gacha games, see the Genshin Impact review.

Except for the gacha stuff, they have taken a totally different approach on this game. It's really different from the last two.
			`,
			artDirection: `This game mainly adapts a "grungy" and retro aesthetic even though there are some futuristic elements.

Even the characters follow this new line of aesthetic, breaking from the Honkai-like character design from the two previous games.

It's actually quite interesting. But sometimes it's just... too much...

I think it tries to imitate Persona 5 in some aspects. 
			`,
			gameplay: `It's a DMC-like (without the style score) and it's really fun.

Every character has it's own set of combos (that gets difficult for me to remember some times) and integrates well with the "assist" gameplay mechanic.

Obviously there is the standard gacha predatory system, but this time the grind seems *a little* easier (?).

In this section I'm pretty influenced by Zhu Yuan's moveset... it's just too fun.

The "Exploration" (not in the "overworld") mechanic is cute, but I don't like it that much. It's basically full of minigames, and I prefer combat over that.
			`,
			graphics: `It's totally different from the other games. It's way more detailed and cleaner.`,
			performance: `I've noticed some frame drops, in some levels and in combat.`,
			music: `I have no idea on how MiHoYo games have such good music.`,
			story: `I feel the same as Genshin on this one... Just slightly better.

But the main problems I described before still persist.

The sidequests are really boring.
			`,
		},
	},
	{
		title: "Fate/Grand Order",
		score: 6.7,
		tags: ["Singleplayer", "Live Service", "Gacha", "VN"],
		imageUrl:
			"https://howlongtobeat.com/games/36059_FateGrand_Order.jpg?width=250",
	},
	{
		title: "Fate/Stay Night",
		score: 8.9,
		tags: ["Singleplayer", "VN"],
		imageUrl:
			"https://howlongtobeat.com/games/3416_FateStay_Night.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		review: { overview: "Comfy 96 hours reading." },
	},
	{
		title: "Fate/Hollow Ataraxia",
		score: 8,
		tags: ["Singleplayer", "VN"],
		imageUrl:
			"https://howlongtobeat.com/games/FateHollowAtaraxia4713.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		review: {
			overview:
				"The main story gets separated by a lot of slice of life stuff and I almost forgot it.",
		},
	},
	{
		title: "Tsukihime (2000)",
		tags: ["Singleplayer", "VN"],
		imageUrl: "https://howlongtobeat.com/games/Tsukihime.jpg?width=250",
		status: "In Progress",
		review: {
			overview:
				"I've read the Arcueid route. I should continue with the other routes before I get the remake.",
		},
	},
	{
		title: "Fate/Extella: The Umbral Star",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/43007_FateExtella_The_Umbral_Star.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		score: 6.9,
		review: { overview: "The combat is boring (and also the story)." },
	},
	{
		title: "Fate/Extella Link",
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/65589_FateExtella_Link.jpg?width=250",
		status: "Completed",
		timesCompleted: 1,
		score: 7.5,
		review: { overview: "Way better than the first one." },
	},
	{
		title: "Azur Lane",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		score: 6.5,
		imageUrl:
			"https://howlongtobeat.com/games/60929_Azur_Lane.jpg?width=250",
		review: {
			overview:
				"The only good thing about this game are the characters (and the fan-art).",
		},
	},
	{
		title: "Arknights",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		score: 6.5,
		imageUrl:
			"https://howlongtobeat.com/games/74683_Arknights.jpg?width=250",
		status: "Dropped",
		review: {
			overview:
				"Interesting setting and mood, but the gameplay is not for me. <br><br> Played the first 3 hours and dropped it. <br><br> Watched the first season of the anime.",
		},
	},
	{
		title: "Girls' Frontline",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		score: 6.3,
		imageUrl:
			"https://howlongtobeat.com/games/67112_Girls_Frontline.png?width=250",
		status: "Dropped",
		review: {
			overview:
				"Played for a week and dropped it. The gameplay is boring and mobily-gameish. <br><br> Waiting for the sequel to come out.",
		},
	},
	{
		title: "NIKKE: The Goddess of Victory",
		tags: ["Singleplayer", "Live Service", "Gacha"],
		score: 7.3,
		imageUrl:
			"https://howlongtobeat.com/games/115666_GODDESS_OF_VICTORY_NIKKE.jpg?width=250",
		review: {
			overview:
				'Decent gameplay and story. <br><br> The gacha is strangely easy (idk???). <br><br> It gets a lot more "difficult" from chapter 23 onwards. <br><br> The story tries to get itself seriously, but the character design (and the english VA) stick out a little bit too much (not that I mind).',
		},
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
		review: { overview: "Relaxing." },
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
		review: { overview: "Not for me." },
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
		review: {
			overview:
				"Tecnically the first playthrough is not finished. The story is meh, but the gameplay is fun.",
		},
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
		review: {
			overview:
				"It's a shame that the company closed down because of Gollum.",
		},
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
		review: {
			overview: "The controls and combos are difficult to remember.",
		},
	},
	{
		title: "Doki Doki Literature Club",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer", "VN"],
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
		review: { overview: "Without DLCs." },
	},
	{
		title: "The Elder Scrolls V: Skyrim",
		score: 8,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/TheElderScrollsVSkyrimLegendaryEdition.jpg?width=250",
		review: { overview: "A lot of mods." },
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
		review: { overview: "Too grindy and poor performance." },
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
		review: { overview: "A lot of mods." },
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
		review: {
			overview:
				"I've played it for a bit, but my save got deleted. Thanks, Epic Games.",
		},
	},
	{
		title: "Rage 2",
		status: "Dropped",
		score: 4,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/58031_Rage_2.jpg?width=250",
		review: { overview: "Boring." },
	},
	{
		title: "The Sims 4",
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/The_Sims_4_Box_Art.jpg?width=250",
		review: { overview: "A lot of DLCs are needed to make the game fun." },
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
		review: { overview: "Battle Royales are not for me." },
	},
	{
		title: "Need for Speed Heat",
		tags: ["Singleplayer"],
		status: "Completed",
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/69695_Need_For_Speed_Heat.png?width=250",
		score: 6.5,
		review: { overview: "Kinda boring." },
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
		review: {
			overview:
				"Revolutionary game for it's time, but the last part is not good.",
		},
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
		review: { overview: "Cute." },
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
		review: { overview: "100%" },
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
		review: {
			overview:
				"Almost finished, but the long hiatus made me forget the controls.",
		},
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
		review: { overview: "100%" },
	},
	{
		title: "NieR Replicant ver.1.22474487139...",
		score: 7,
		tags: ["Singleplayer"],
		status: "In Progress",
		imageUrl:
			"https://howlongtobeat.com/games/76406_NieR_Replicant_ver122474487139.jpg?width=250",
		review: {
			overview:
				"I adore NieR Automata, but this one is not as good. Too grindy with extremely boring sidequests.<br><br> Finished ending A. <br><br> I did not have fun.",
		},
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
		review: { overview: "No DLC." },
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
		review: { overview: "Too difficult for me." },
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
		tags: ["Singleplayer", "Live Service", "Gacha"],
		imageUrl:
			"https://howlongtobeat.com/games/131943_Snowbreak_Containment_Zone.jpg?width=250",
	},
	{
		title: "Space Engineers",
		tags: ["Singleplayer", "Endless"],
		imageUrl:
			"https://howlongtobeat.com/games/Space_Engineers.jpg?width=250",
		review: { overview: "Too difficult for me." },
	},
	{
		title: "Subnautica",
		score: 8.2,
		status: "Completed",
		tags: ["Singleplayer"],
		timesCompleted: 1,
		imageUrl:
			"https://howlongtobeat.com/games/23740_Subnautica.jpg?width=250",
		review: { overview: "No DLC." },
	},
	{
		title: "The Talos Principle",
		score: 7.8,
		status: "Dropped",
		timesCompleted: 0.75,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/TheTalosPrinciple.jpg?width=250",
		review: {
			overview:
				"It was fun, but it got strangely depressing for me and I dropped it.",
		},
	},
	{
		title: "Team Fortress 2",
		score: 7.5,
		tags: ["Multiplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/9632_Team_Fortress_2.jpg?width=250",
	},
	{
		title: "TheDawn",
		score: 7,
		status: "Completed",
		timesCompleted: 1,
		tags: ["Singleplayer"],
		imageUrl: "https://howlongtobeat.com/games/87311_TheDawn.jpg?width=250",
		review: {
			overview: "Nice small one-person indie game (just an hour).",
		},
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
		timesCompleted: 1,
		tags: ["Multiplayer", "Endless"],
		imageUrl: "https://howlongtobeat.com/games/Warframe.jpg?width=250",
		review: {
			overview:
				"My muscle memory got annihilated by the control revamp in 2020. Too much confusing F2P-type content to return.",
		},
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
		title: "The Witcher 3: Wild Hunt",
		score: 9,
		status: "Completed",
		timesCompleted: 1.75,
		tags: ["Singleplayer"],
		imageUrl:
			"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg?width=250",
		review: { overview: "With DLCs." },
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
]
