import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="amazon_prime"
				/>

				<div className="home__row">
					
                    <Product
					title="Drone DJI Spark II"
					price={800}
					image="https://img.pngio.com/drone-png-images-transparent-free-download-pngmartcom-drone-png-964_612.png"
					rating={3}
					/>
                    <Product
					title="Sony Headphone"
					price={399.99}
					image="https://hnsgsfp.imgix.net/9/images/detailed/51/Sony_WH-CH710N_Wireless_Noise_Cancelling_Headphone_-_Blue_(IMG_1).jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress"
					rating={4}
					
					
					/>
                    
					
				</div>
				<div className="home__row">
				<Product
				title="Apple macbookair M1"
				price={1299.99}
				image="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png"
				rating={5} />
                    <Product
					title="Iphone"
					price={721.00}
					image="https://e7.pngegg.com/pngimages/599/150/png-clipart-iphone-x-front-view-apple%E6%89%8B%E6%9C%BA-iphone-thumbnail.png"
					rating={3} /> 
                    <Product
					title="Salwar Kameez"
					price={300}
					image="https://www.ethnictrendz.com/image/data/faux-chiffon-embroidered-salwar-kameez-in-cream-23874.jpg"
					rating={5} /> 
				</div>
				<div className="home__row"><Product
				title="Samsung Curve Tv"
				price={1300}
				image="https://i.ytimg.com/vi/Rj8Yx2Oxy_A/maxresdefault.jpg"
				rating={5} /> 
				
                    </div>
			</div>
		</div>
	);
}

export default Home;
