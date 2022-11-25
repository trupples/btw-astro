---
layout: ../layouts/Layout.astro
title: BEST Training Weekend
---

<section id="first-section">
	<img id="logo" src="logo.svg" alt="BEST Training Weekend logo" width="300" />
	<h1>BEST Training Weekend</h1>
	<h2>Dezvoltă-ți abilitățile!</h2>
	<br/><br/>
	<h2>10 - 11 Decembrie</h2>
	<h2><a href="https://goo.gl/maps/MKMRF2eEGbCtvk8T7" target="_blank">Tech'n'Trade</a></h2>
	<br/><br/>
	<h2><a href="">Înscrie-te!</a></h2>
	<img id="leaves-left" src="page1-left-leaves.png" />
	<img id="leaves-right" src="page1-right-leaves.png" />
	<div id="color-change"></div>
</section>

<main>

# Ce este BTW?

Un weekend în care poți participa la traininguri gratuite, organizate special pentru studenți și gândite în așa fel încât să se plieze perfect pe dorințele și nevoile voastre.

În cadrul evenimentului nostru poți să întâlnești cei mai tari oameni care sunt gata să își împărtășească cunoștințele cu tine prin traininguri menite sa te ajute atât pe partea de dezvoltare personală, cât și profesională.

Dacă vrei să faci un pas înainte și să fii mai aproape de ceea ce iți dorești să devii, nu rata evenimentul nostru care va avea loc în 10-11 Decembrie 2022.

# Galerie

<ul id="gallery">
	<li><img src="gal/1.png" width="200" /></li>
	<li><img src="gal/2.png" width="200" /></li>
	<li><img src="gal/3.png" width="200" /></li>
	<li><img src="gal/4.png" width="200" /></li>
	<li><img src="gal/5.png" width="200" /></li>
	<li><img src="gal/6.png" width="200" /></li>
	<li><img src="gal/7.png" width="200" /></li>
</ul>

</main>

<style>
	#first-section {
		position: relative;
		box-sizing: border-box;
		min-height: 100vh;
		text-align: center;

		background: url('clouds.svg'), linear-gradient(180deg, #47BCEB 35.23%, #DAF4FF 100%);
		background-repeat: no-repeat;
		background-position-y: 30%;
		color: black;

		/* Prevent overlap with leaves */
		padding-bottom: calc(min(10vw, 100px));
		margin-bottom: calc(min(10vw, 100px));
	}

	#logo {
		width: 65vw;
		max-width: 430px;
	}

	#first-section h1, #first-section h2 {
		font-size: 2.25rem;
		margin: 0;
		z-index: 2;
	}

	#first-section h1 {
		font-weight: 700;
	}

	#subtitle {
		margin-bottom: 3.5rem;
	}

	@media screen and (max-width: 100ch) {
		#first-section h1, #first-section h2 {
			font-size: 2rem;
		}
	}

	#leaves-left, #leaves-right {
		position: absolute;
		pointer-events: none;
		z-index: 1;
	}

	#leaves-left {
		left: 0; bottom: calc(min(60vw, 500px) * -0.3);
		width: 60vw; max-width: 500px;
	}

	#leaves-right {
		right: 0; bottom: calc(min(60vw, 400px) * -0.6);
		width: 60vw; max-width: 400px;
	}

	#color-change {
		position: absolute;
		bottom: -24px; height: 24px; width: 100vw;
		background: linear-gradient(180deg, #DAF4FF 0%, #161A29 100%);
	}

	#gallery {
		width: 100%;
		overflow-x: auto;
		padding: 0;
		display: flex;
		list-style: none;
		gap: 1em;
	}

	#gallery li img {
		width: 80vw;
		max-width: 300px;
	}
</style>
