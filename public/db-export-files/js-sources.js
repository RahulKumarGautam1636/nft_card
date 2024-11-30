// let images = [
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423846/1731423843806_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423847/1731423843845_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423848/1731423843867_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-2-202304131033.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423883/1731423880324_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-0-202205161816.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423884/1731423880343_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-1-202205161817.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423885/1731423880377_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-2-202205161817.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423886/1731423880411_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-3-202205161817.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423910/1731423906728_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-wear-.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423911/1731423906762_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_1.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423912/1731423906814_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_2.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423913/1731423906821_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_3.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423941/1731423936285_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-2-202407121653.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423981/1731423977451_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423982/1731423977466_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423983/1731423977477_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423984/1731423977515_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-3-202304220521.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423986/1731423977546_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-4-202304220521.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424013/1731424010395_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424014/1731424010416_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-1-202408030114.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424015/1731424010450_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-2-202408030114.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424016/1731424010462_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-3-202408030114.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424055/1731424052508_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424056/1731424052513_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424057/1731424052519_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424058/1731424052523_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424082/1731424079355_aashirvaad-superior-mp-atta-5-kg-product-images-o490750661-p590150648-0-202401260852.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424082/1731424079355_aashirvaad-superior-mp-atta-5-kg-product-images-o490750661-p590150648-1-202401260852.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424105/1731424102423_good-life-mp-wheat-chakki-atta-1-kg-product-images-o491458271-p491458271-0-202306011947.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424105/1731424102424_good-life-mp-wheat-chakki-atta-1-kg-product-images-o491458271-p491458271-1-202306011947.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424391/1731424388674_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-0-202407041151.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424392/1731424388675_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-1-202407041151.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424366/1731424364147_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424367/1731424364148_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-1-202203150155.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424351/1731424349310_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-0-202204281552.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424352/1731424349311_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-1-202204281552.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424323/1731424321191_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-0-202404151052.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424324/1731424321193_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424325/1731424321196_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-2-202404151052.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424291/1731424289008_ksc-khatushyam-collection-grey-pu-for-women-handheld-bag-product-images-rvoxe6ocho-0-202405282359.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424292/1731424289009_ksc-khatushyam-collection-grey-pu-for-women-handheld-bag-product-images-rvoxe6ocho-1-202405282359.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424256/1731424254401_live-fashion-white-women-printed-pu-sling-bag-product-images-rvkzz1hq3e-0-202306302128.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424257/1731424254405_live-fashion-white-women-printed-pu-sling-bag-product-images-rvkzz1hq3e-1-202306302128.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424238/1731424236270_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-0-202406040227.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424239/1731424236272_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-1-202406040227.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424240/1731424236279_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-2-202406040227.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424210/1731424208557_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424211/1731424208618_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424187/1731424185333_aqualite-mens-black-grey-slider-product-images-rvlx7wvjex-0-202305251453.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424188/1731424185334_aqualite-mens-black-grey-slider-product-images-rvlx7wvjex-1-202305251453.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424154/1731424151593_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-0-202406162001.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424155/1731424151615_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-1-202406162001.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424713/1731424711056_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-0-202309191618.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424714/1731424711068_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-1-202309191619.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424715/1731424711126_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-3-202309191619.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424716/1731424711138_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsqu3p7oa-0-202309191612.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424675/1731424673452_aqualite-women-pink-casual-shoes-product-images-rvjmglffdd-0-202305241611.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424676/1731424673487_aqualite-women-pink-casual-shoes-product-images-rvjmglffdd-3-202305241611.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424646/1731424643993_denill-brown-bellies-for-women-product-images-rvrehaibat-0-202211050253.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424647/1731424644016_denill-brown-bellies-for-women-product-images-rvrehaibat-1-202211050253.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424647/1731424644025_denill-brown-bellies-for-women-product-images-rvrehaibat-2-202211050253.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424648/1731424644025_denill-brown-bellies-for-women-product-images-rvrehaibat-3-202211050253.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424620/1731424618079_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424621/1731424618097_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-1-202402141853.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424621/1731424618113_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-2-202402141853.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424622/1731424618146_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-3-202402141853.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424583/1731424581814_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424584/1731424581814_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424559/1731424556943_dangar-enterprise-kundan-white-earring-for-women-and-girls-terndy-women-pooja-and-diwali-special-attractive-earrings-set-for-party-occasion-kundan-work-studs-triangle-shape-kundan-stud-earring-1-pair-product-images-rv.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424527/1731424525359_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-0-202407161550.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424528/1731424525369_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-1-202407161550.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424529/1731424525385_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-2-202407161550.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424482/1731424480112_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-0-202405071920.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424483/1731424480113_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-2-202405071920.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424484/1731424480118_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-3-202405071920.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424451/1731424449901_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424452/1731424449902_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-2-202208221207.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424453/1731424449902_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-3-202208221207.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424434/1731424432011_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-0-202305251507.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424436/1731424432024_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-1-202305251507.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424437/1731424432054_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-2-202305251507.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425497/1731425494172_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-0-202408051114.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425498/1731425494219_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-1-202408051114.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425499/1731425494227_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-2-202408051114.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425292/1731425289960_aqualite-s-trendy-and-stylish-pista-flip-flops-slides-for-women-product-images-rvy0j9wdwq-0-202304181637.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425293/1731425289963_aqualite-s-trendy-and-stylish-pista-flip-flops-slides-for-women-product-images-rvy0j9wdwq-1-202304181637.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425230/1731425228228_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-0-202205172238_1.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425113/1731425110507_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425056/1731425054883_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424998/1731424995605_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-0-202210071628_1.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425000/1731424995605_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-1-202210071628.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424839/1731424837217_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p5969279.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424840/1731424837221_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p596927938-1-202405131243.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424799/1731424797909_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-0-202310140619.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424800/1731424797910_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-1-202310140619.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424768/1731424766744_mars-hd-2in1-nutration-for-skin-foundation-golden-beige-f07-product-images-orvjaeibjcv-p603656924-0-202308051112.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424769/1731424766744_mars-hd-2in1-nutration-for-skin-foundation-golden-beige-f07-product-images-orvjaeibjcv-p603656924-1-202308051112.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426056/1731426054086_nisha-creme-hair-color-3-5-chocolate-brown-60-gm-prod-o992688-p608316872-0-202403020848.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426057/1731426054088_nisha-creme-hair-color-3-5-chocolate-brown-60-gm-prod-o992688-p608316872-1-202403020848.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425981/1731425979560_navratna-ayurvedic-cool-oil-200-ml-prod-o412393-p608316522-0-202403020842.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425954/1731425951406_BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425928/1731425926157_new-golden-long-jhumki-earring-product-images-rv8v7dq4tt-0-202408011906.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425909/1731425907459_sirimiri-smer-1011-german-silver-drops-danglers-product-images-rv85yszgdo-1-202408011925.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425910/1731425907459_sirimiri-smer-1011-german-silver-drops-danglers-product-images-rv85yszgdo-2-202408011925.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425872/1731425869549_sukkhi-astonish-kundan-gold-plated-pearl-chandelier-earring-for-women-product-images-rv9je8a3um-0-202202250139.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425845/1731425843410_zandu-chyavanprashad-with-no-added-sugar-900-gm-prod-o1096116-p608315853-0-202403020815.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425846/1731425843410_zandu-chyavanprashad-with-no-added-sugar-900-gm-prod-o1096116-p608315853-1-202403020815.jpg",
//     "https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729064609/1729064607699_conbre-multiplexr2-pro-upgraded-hd-smart-wifi-wireless-ip-cctv-security-camera-night-vision-2-way-audio-support-64-gb-micro-sd-card-slot-product-images-orvnkptvicq-p594015290-0-202304040248.webp",
//     "https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729064611/1729064607699_conbre-multiplexr2-pro-upgraded-hd-smart-wifi-wireless-ip-cctv-security-camera-night-vision-2-way-audio-support-64-gb-micro-sd-card-slot-product-images-orvnkptvicq-p594015290-2-202304040248.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425789/1731425787258_sony-alpha-ilce-7m3-full-frame-24-2mp-mirrorless-digital-slr-camera-body-4k-full-frame-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-low-light-camera-black-digital-o491362603-p590038915-0-202009260.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425790/1731425787270_sony-alpha-ilce-7m3-full-frame-24-2mp-mirrorless-digital-slr-camera-body-4k-full-frame-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-low-light-camera-black-digital-o491362603-p590038915-1-202009260.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425731/1731425729133_boat-wave-fury-smartwatch-with-4-64-cm-1-83-inch-hd-display-advanced-bluetooth-calling-functional-crown-50-sports-mode-ip67-dust-sweat-splash-resistant-active-black-digital-o494422055-p609566921-0-20240723183.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425732/1731425729134_boat-wave-fury-smartwatch-with-4-64-cm-1-83-inch-hd-display-advanced-bluetooth-calling-functional-crown-50-sports-mode-ip67-dust-sweat-splash-resistant-active-black-digital-o494422055-p609566921-1-20240723183.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426106/1731426104931_morden-smart-watch-for-kids-men-women-boys-girls-d116-water-proof-touchscreen-smart-watch-bluetooth-1-44-hd-screen-smart-watch-with-daily-activity-tracker-heart-rate-sensor-sleep-monitor-black-product-images-.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426161/1731426158910_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-0-202304241416.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426162/1731426158910_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-1-202304241416.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426306/1731426304903_zoom_0-1673275594.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426307/1731426304903_zoom_1-1673275594.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426335/1731426332371_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426335/1731426332380_1000014029787-Green-GREEN-1000014029787_02-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426336/1731426332383_1000014029787-Green-GREEN-1000014029787_03-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426337/1731426332384_1000014029787-Green-GREEN-1000014029787_04-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426338/1731426332428_1000014029787-Green-GREEN-1000014029787_05-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426339/1731426332428_1000014029787-Green-GREEN-1000014029787_06-2100.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426367/1731426364991_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-0-202303181240.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426369/1731426364991_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-1-202303181240.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426400/1731426397947_hp-15-fb0082ax-victus-gaming-laptop-amd-ryzen5-5600h-8gb-512gb-ssd-4-gb-nvidia-geforce-rtx-3050-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-digital-o493178411-p594412844-0-202406241824.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426401/1731426397949_hp-15-fb0082ax-victus-gaming-laptop-amd-ryzen5-5600h-8gb-512gb-ssd-4-gb-nvidia-geforce-rtx-3050-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-digital-o493178411-p594412844-1-202406241824.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426481/1731426479928_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426482/1731426479930_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426483/1731426479934_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426525/1731426523415_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426526/1731426523420_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426527/1731426523427_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426527/1731426523431_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426749/1731426747475_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-0-202405211637.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426750/1731426747491_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-1-202405211637.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426794/1731426791384_beatxp-unbound-era-2-01-super-amoled-display-bluetooth-calling-smart-watch-metal-body-rotary-crown-410-502px-1000-nits-60hz-refresh-rate-100-sports-modes-black-product-images-orv6i4axy8v-p606246617-0-20231219.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426794/1731426791390_beatxp-unbound-era-2-01-super-amoled-display-bluetooth-calling-smart-watch-metal-body-rotary-crown-410-502px-1000-nits-60hz-refresh-rate-100-sports-modes-black-product-images-orv6i4axy8v-p606246617-1-202312191.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427383/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-0-202309141646.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427384/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-1-202309141252.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427384/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-2-202309141252.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427356/1731427353236_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-2-202401240757.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427102/1731427099768_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427103/1731427099785_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427104/1731427099807_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427105/1731427099848_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427031/1731427029451_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427032/1731427029454_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427033/1731427029456_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427034/1731427029460_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-3-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427035/1731427029467_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-4-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427036/1731427029498_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-5-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427037/1731427029505_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-6-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426970/1731426968400_51SLVpZUiwL._SX569_.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426971/1731426968400_71pl1-LoQ8L._SX569_.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426972/1731426968400_71US9Oi3OiL._SX569_.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426972/1731426968401_81v1UTEpELL._SX569_.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426974/1731426968411_91hJrlzHi_L._SX569_.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426914/1731426912067_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426915/1731426912070_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426878/1731426875868_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426879/1731426875869_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-1-202304080900.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426880/1731426875884_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-2-202304080900.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426881/1731426875923_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-3-202304080900.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486841/1731486838744_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-0-202402111537.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486842/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-1-202402111537.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486843/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-2-202402111537.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486972/1731486966499_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-0-202301180235.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486973/1731486966501_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-1-202301180235.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486973/1731486966504_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-2-202301180235.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487665/1731487663446_0eb0c310-0fd5-42bb-8bfd-0bedb047166f1711689666424-RARE-RABBIT-Men-Layerr-Regular-Fit-Spread-Collar-Cotton-Shir-11.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487666/1731487663448_961a285d-a1ac-4e93-b773-72d987ae20131707997689284RARERABBITMenStandardOpaqueCasualShirt2.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487667/1731487663449_de8dbd08-e78c-441c-a906-9b67588a50e31707997689260RARERABBITMenStandardOpaqueCasualShirt1.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487667/1731487663451_fbab6e61-3333-45e4-9164-72c74be2e4451707997689278RARERABBITMenStandardOpaqueCasualShirt4.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487668/1731487663452_fe1a609f-1e87-4cc9-814b-d6fcd84ab37e1707997689290RARERABBITMenStandardOpaqueCasualShirt3.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504197/1731504193013_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504198/1731504193058_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504199/1731504193079_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504200/1731504193385_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-3-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504201/1731504193389_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-4-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504202/1731504193411_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-5-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504203/1731504193413_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-6-202310141511.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488540/1731488537570_6ql844nM_8c9eb23be2844d5eb26a30a38ed55217.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488542/1731488537579_uMtsM8cA_69a12424597845f99dcf8f22ddf68626.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488543/1731488537586_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732339260/1732339260271_pro360-mom-nutritional-powder-swiss-chocolate-200-gm-prod-o1041678-p608315808-0-202403020814.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732339815/1732339814920_good-home-air-freshener-lavender-50-gm-prod-o1069771-p608296754-0-202403020001.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732340079/1732340079091_protinex-powder-rich-chocolate-flavour-jar-400-gm-prod-o1091131-p608299738-0-202403020120.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732340370/1732340370022_sebamed-cleansing-bar-100gm-prod-o373797-p608299470-0-202411191631.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425029/1732425028729_dermistry-intense-nourishing-night-cream-50-ml-prod-o1130060-p607840425-0-202402092238.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425238/1732425238312_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425504/1732425504382_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425866/1732425866124_fostelo-women-s-meryl-handbag-maroon-jm_fsb-1747-product-images-rvrf16ea4d-0-202212072158.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426209/1732426209389_kerala-naturals-rose-water-100-ml-prod-o906610-p608297587-0-202403020016.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426436/1732426436350_dr-batra-s-natural-cleansing-milk-echinacea-chamomile-pack-of-3-x-100-ml-prod-o1018971-p608297679-2-202403020018.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426917/1732426917570_jiobook-11-2023-ultimate-learning-partner-nb1112mm-blu-4g-lte-mediatek-2-0-ghz-octa-core-4-gb-lpddr4-64-gb-emmc-jioos-expandable-256-gb-29-46-cm-11-6-inch-digital-o491894913-p609664147-0-202408281600.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732427090/1732427090543_chuwi-intel-core-i5-10th-gen-1035g1-16-gb-512-gb-ssd-windows-11-home-corebook-x-grey-laptop-product-images-orvkj8euljf-p607675928-0-202402012032.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732427321/1732427321326_oppo-k12x-5g-128-gb-6-gb-ram-midnight-navy-mobile-phone-digital-o494422233-p609630871-0-202407311923.jpg",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732428445/1732428444304_realme-narzo-n65-5g-128-gb-4-gb-ram-amber-gold-mobile-phone-digital-o494422937-p609971944-0-202409161631.webp",
//     "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732428445/1732428444625_realme-narzo-n65-5g-128-gb-4-gb-ram-amber-gold-mobile-phone-digital-o494422937-p609971944-3-202409161631.webp"
// ]

// let products = [
//     {
//         "_id": "66cf364a7f21a4cf0943b087",
//         "name": "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirts",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423846/1731423843806_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423847/1731423843845_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423848/1731423843867_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-2-202304131033.webp"
//         ],
//         "brand": "GESPO",
//         "price": 399,
//         "oldPrice": 499,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 2,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61073f4ee2e36a03e90b",
//                 "id": "670a61073f4ee2e36a03e90b"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61073f4ee2e36a03e90c",
//                 "id": "670a61073f4ee2e36a03e90c"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61073f4ee2e36a03e90d",
//                 "id": "670a61073f4ee2e36a03e90d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61073f4ee2e36a03e90e",
//                 "id": "670a61073f4ee2e36a03e90e"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61073f4ee2e36a03e90f",
//                 "id": "670a61073f4ee2e36a03e90f"
//             },
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b50b561347e5c638f8eba",
//                 "id": "670b50b561347e5c638f8eba"
//             }
//         ],
//         "dateCreated": "2024-08-28T14:38:02.893Z",
//         "__v": 0,
//         "id": "66cf364a7f21a4cf0943b087"
//     },
//     {
//         "_id": "66d1df5c88319dc216a20017",
//         "name": "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)",
//         "description": "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423883/1731423880324_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-0-202205161816.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423884/1731423880343_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-1-202205161817.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423885/1731423880377_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-2-202205161817.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423886/1731423880411_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-3-202205161817.jpg"
//         ],
//         "brand": "VNEED",
//         "price": 50000,
//         "oldPrice": 655,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "m",
//             "XXL",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61243f4ee2e36a03e971",
//                 "id": "670a61243f4ee2e36a03e971"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61243f4ee2e36a03e972",
//                 "id": "670a61243f4ee2e36a03e972"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61243f4ee2e36a03e973",
//                 "id": "670a61243f4ee2e36a03e973"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61243f4ee2e36a03e974",
//                 "id": "670a61243f4ee2e36a03e974"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61243f4ee2e36a03e975",
//                 "id": "670a61243f4ee2e36a03e975"
//             },
//             {
//                 "value": "LK",
//                 "label": "Sri Lanka",
//                 "_id": "670a61243f4ee2e36a03e976",
//                 "id": "670a61243f4ee2e36a03e976"
//             }
//         ],
//         "dateCreated": "2024-08-30T15:03:56.294Z",
//         "__v": 0,
//         "updatedAt": "2024-09-09T03:54:32.426Z",
//         "id": "66d1df5c88319dc216a20017"
//     },
//     {
//         "_id": "66d44646aa5c959c5b9fa1c6",
//         "name": "Altecia The Perfect Pair Women Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423910/1731423906728_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-wear-.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423911/1731423906762_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_1.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423912/1731423906814_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_2.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423913/1731423906821_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_3.jpg"
//         ],
//         "brand": "Altecia",
//         "price": 650,
//         "oldPrice": 780111,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61413f4ee2e36a03e9a9",
//                 "id": "670a61413f4ee2e36a03e9a9"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61413f4ee2e36a03e9aa",
//                 "id": "670a61413f4ee2e36a03e9aa"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "670a61413f4ee2e36a03e9ab",
//                 "id": "670a61413f4ee2e36a03e9ab"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61413f4ee2e36a03e9ac",
//                 "id": "670a61413f4ee2e36a03e9ac"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61413f4ee2e36a03e9ad",
//                 "id": "670a61413f4ee2e36a03e9ad"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "670a61413f4ee2e36a03e9ae",
//                 "id": "670a61413f4ee2e36a03e9ae"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61413f4ee2e36a03e9af",
//                 "id": "670a61413f4ee2e36a03e9af"
//             }
//         ],
//         "dateCreated": "2024-09-01T10:47:34.389Z",
//         "__v": 0,
//         "id": "66d44646aa5c959c5b9fa1c6"
//     },
//     {
//         "_id": "66d491377d46e49d1b58de97",
//         "name": "Kondom",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423941/1731423936285_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-2-202407121653.jpg"
//         ],
//         "brand": "CLOSWIF",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61593f4ee2e36a03e9d9",
//                 "id": "670a61593f4ee2e36a03e9d9"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61593f4ee2e36a03e9da",
//                 "id": "670a61593f4ee2e36a03e9da"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61593f4ee2e36a03e9db",
//                 "id": "670a61593f4ee2e36a03e9db"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61593f4ee2e36a03e9dc",
//                 "id": "670a61593f4ee2e36a03e9dc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61593f4ee2e36a03e9dd",
//                 "id": "670a61593f4ee2e36a03e9dd"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61593f4ee2e36a03e9de",
//                 "id": "670a61593f4ee2e36a03e9de"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:07:19.145Z",
//         "__v": 0,
//         "id": "66d491377d46e49d1b58de97"
//     },
//     {
//         "_id": "66d492927d46e49d1b58df07",
//         "name": "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423981/1731423977451_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423982/1731423977466_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423983/1731423977477_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423984/1731423977515_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-3-202304220521.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423986/1731423977546_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-4-202304220521.webp"
//         ],
//         "brand": "Tazo",
//         "price": 450,
//         "oldPrice": 1000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Men",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61623f4ee2e36a03ea0c",
//                 "id": "670a61623f4ee2e36a03ea0c"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd4011f039258ce560546",
//                 "id": "670cd4011f039258ce560546"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd4011f039258ce560547",
//                 "id": "670cd4011f039258ce560547"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd4011f039258ce560548",
//                 "id": "670cd4011f039258ce560548"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:13:06.752Z",
//         "__v": 0,
//         "id": "66d492927d46e49d1b58df07"
//     },
//     {
//         "_id": "66d595bf247824aacf08cb8a",
//         "name": "Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt for Women low price up to off new arrival most loved collection trending tops fancy top printed top printed trouser casual wear party wear daily wear night wear top bottom set-1Pair(size -XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424013/1731424010395_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424014/1731424010416_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-1-202408030114.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424015/1731424010450_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-2-202408030114.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424016/1731424010462_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-3-202408030114.jpg"
//         ],
//         "brand": "Altecia",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 600,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XXL"
//         ],
//         "productWeight": [
//             "1KG",
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61683f4ee2e36a03ea35",
//                 "id": "670a61683f4ee2e36a03ea35"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd3bd1f039258ce560496",
//                 "id": "670cd3bd1f039258ce560496"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd3bd1f039258ce560497",
//                 "id": "670cd3bd1f039258ce560497"
//             }
//         ],
//         "dateCreated": "2024-09-02T10:38:55.907Z",
//         "__v": 0,
//         "id": "66d595bf247824aacf08cb8a"
//     },
//     {
//         "_id": "66df0156d9c220020e25a2a6",
//         "name": "Siril Georgette Pink Color Saree with Blouse piece",
//         "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424055/1731424052508_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424056/1731424052513_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424057/1731424052519_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424058/1731424052523_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
//         ],
//         "brand": "SIRIL",
//         "price": 500,
//         "oldPrice": 650,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a616d3f4ee2e36a03ea5e",
//                 "id": "670a616d3f4ee2e36a03ea5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0831a0c5f1ae830f794",
//                 "id": "670aa0831a0c5f1ae830f794"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0831a0c5f1ae830f795",
//                 "id": "670aa0831a0c5f1ae830f795"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0831a0c5f1ae830f796",
//                 "id": "670aa0831a0c5f1ae830f796"
//             }
//         ],
//         "dateCreated": "2024-09-09T14:08:22.354Z",
//         "__v": 0,
//         "id": "66df0156d9c220020e25a2a6"
//     },
//     {
//         "_id": "66e1327804413e6a409f9689",
//         "name": "Aashirvaad Superior Whole Wheat MP Atta 1000kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424082/1731424079355_aashirvaad-superior-mp-atta-5-kg-product-images-o490750661-p590150648-0-202401260852.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424082/1731424079355_aashirvaad-superior-mp-atta-5-kg-product-images-o490750661-p590150648-1-202401260852.webp"
//         ],
//         "brand": "AASHIRVAAD",
//         "price": 2,
//         "oldPrice": 270,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a617c3f4ee2e36a03eab0",
//                 "id": "670a617c3f4ee2e36a03eab0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ed4fa94c7ca12096598",
//                 "id": "670a7ed4fa94c7ca12096598"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:02:32.029Z",
//         "__v": 0,
//         "id": "66e1327804413e6a409f9689"
//     },
//     {
//         "_id": "66e132f304413e6a409f96bd",
//         "name": "Good Life MP Wheat Chakkki Atta 1 kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424105/1731424102423_good-life-mp-wheat-chakki-atta-1-kg-product-images-o491458271-p491458271-0-202306011947.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424105/1731424102424_good-life-mp-wheat-chakki-atta-1-kg-product-images-o491458271-p491458271-1-202306011947.webp"
//         ],
//         "brand": "Good Life",
//         "price": 250,
//         "oldPrice": 330,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61813f4ee2e36a03ead9",
//                 "id": "670a61813f4ee2e36a03ead9"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:04:35.741Z",
//         "__v": 0,
//         "id": "66e132f304413e6a409f96bd"
//     },
//     {
//         "_id": "66e139b767c833713b24751e",
//         "name": "HP 15s-fr5012TU Standard Laptop (Intel Core i3-1215U/8 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home/MSO/FHD), 39.6cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424391/1731424388674_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-0-202407041151.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424392/1731424388675_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-1-202407041151.webp"
//         ],
//         "brand": "HP",
//         "price": 35000,
//         "oldPrice": 42000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 15,
//         "productRam": [
//             "8GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61d63f4ee2e36a03eca7",
//                 "id": "670a61d63f4ee2e36a03eca7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa09a1a0c5f1ae830f80c",
//                 "id": "670aa09a1a0c5f1ae830f80c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa09a1a0c5f1ae830f80d",
//                 "id": "670aa09a1a0c5f1ae830f80d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa09a1a0c5f1ae830f80e",
//                 "id": "670aa09a1a0c5f1ae830f80e"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:33:27.831Z",
//         "__v": 0,
//         "id": "66e139b767c833713b24751e"
//     },
//     {
//         "_id": "66e13a3b67c833713b24759f",
//         "name": "Fortune Sunlite Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424366/1731424364147_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424367/1731424364148_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-1-202203150155.jpg"
//         ],
//         "brand": "Fortune",
//         "price": 150,
//         "oldPrice": 170,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61dc3f4ee2e36a03ecd0",
//                 "id": "670a61dc3f4ee2e36a03ecd0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f59fa94c7ca12096796",
//                 "id": "670a7f59fa94c7ca12096796"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:35:39.653Z",
//         "__v": 0,
//         "id": "66e13a3b67c833713b24759f"
//     },
//     {
//         "_id": "66e13a9e67c833713b2475d9",
//         "name": "Good Life Kachi Ghani Mustard Oil 1 L (Pouch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424351/1731424349310_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-0-202204281552.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424352/1731424349311_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-1-202204281552.webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 4500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61f43f4ee2e36a03ed0e",
//                 "id": "670a61f43f4ee2e36a03ed0e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e79fa94c7ca12096432",
//                 "id": "670a7e79fa94c7ca12096432"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:37:18.172Z",
//         "__v": 0,
//         "id": "66e13a9e67c833713b2475d9"
//     },
//     {
//         "_id": "66e13bcc67c833713b24763a",
//         "name": "ZAALIQA Girls Black Handbag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424323/1731424321191_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-0-202404151052.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424324/1731424321193_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424325/1731424321196_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-2-202404151052.jpg"
//         ],
//         "brand": "ZAALIQA",
//         "price": 620,
//         "oldPrice": 750,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61fb3f4ee2e36a03ed3f",
//                 "id": "670a61fb3f4ee2e36a03ed3f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd6801f039258ce561017",
//                 "id": "670cd6801f039258ce561017"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:42:20.690Z",
//         "__v": 0,
//         "id": "66e13bcc67c833713b24763a"
//     },
//     {
//         "_id": "66e13c6867c833713b24768b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Grey Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424291/1731424289008_ksc-khatushyam-collection-grey-pu-for-women-handheld-bag-product-images-rvoxe6ocho-0-202405282359.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424292/1731424289009_ksc-khatushyam-collection-grey-pu-for-women-handheld-bag-product-images-rvoxe6ocho-1-202405282359.webp"
//         ],
//         "brand": "KSC",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62033f4ee2e36a03ed70",
//                 "id": "670a62033f4ee2e36a03ed70"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b45885efc6a71f2adc4fe",
//                 "id": "670b45885efc6a71f2adc4fe"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:44:56.302Z",
//         "__v": 0,
//         "id": "66e13c6867c833713b24768b"
//     },
//     {
//         "_id": "66e13d6267c833713b24772b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Red Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424256/1731424254401_live-fashion-white-women-printed-pu-sling-bag-product-images-rvkzz1hq3e-0-202306302128.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424257/1731424254405_live-fashion-white-women-printed-pu-sling-bag-product-images-rvkzz1hq3e-1-202306302128.webp"
//         ],
//         "brand": "KSC ",
//         "price": 750,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62133f4ee2e36a03edd2",
//                 "id": "670a62133f4ee2e36a03edd2"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f34fa94c7ca1209674c",
//                 "id": "670a7f34fa94c7ca1209674c"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:49:06.885Z",
//         "__v": 0,
//         "id": "66e13d6267c833713b24772b"
//     },
//     {
//         "_id": "66e13dee67c833713b247765",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424238/1731424236270_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-0-202406040227.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424239/1731424236272_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-1-202406040227.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424240/1731424236279_live-fashion-black-women-pu-sling-bag-product-images-rvlrqnkwh2-2-202406040227.jpg"
//         ],
//         "brand": "LIVE FAShion",
//         "price": 650,
//         "oldPrice": 850,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a621b3f4ee2e36a03ee03",
//                 "id": "670a621b3f4ee2e36a03ee03"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8bd1f039258ce5616a8",
//                 "id": "670cd8bd1f039258ce5616a8"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:51:26.242Z",
//         "__v": 0,
//         "id": "66e13dee67c833713b247765"
//     },
//     {
//         "_id": "66e14052d7b24f428474f35a",
//         "name": "POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424210/1731424208557_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424211/1731424208618_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg"
//         ],
//         "brand": "POCO",
//         "price": 13000,
//         "oldPrice": 15000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62223f4ee2e36a03ee34",
//                 "id": "670a62223f4ee2e36a03ee34"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd88b1f039258ce5615e2",
//                 "id": "670cd88b1f039258ce5615e2"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd88b1f039258ce5615e3",
//                 "id": "670cd88b1f039258ce5615e3"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:01:38.292Z",
//         "__v": 0,
//         "id": "66e14052d7b24f428474f35a"
//     },
//     {
//         "_id": "66e140e4d7b24f428474f419",
//         "name": "Aqualite Black & Grey Slip-Resistance Sliders for Men",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424187/1731424185333_aqualite-mens-black-grey-slider-product-images-rvlx7wvjex-0-202305251453.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424188/1731424185334_aqualite-mens-black-grey-slider-product-images-rvlx7wvjex-1-202305251453.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 850,
//         "oldPrice": 920,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "673089cf45d0a9534fb3bed5",
//         "subCat": "Men Footwear",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a622a3f4ee2e36a03ee65",
//                 "id": "670a622a3f4ee2e36a03ee65"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8501f039258ce561516",
//                 "id": "670cd8501f039258ce561516"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8501f039258ce561517",
//                 "id": "670cd8501f039258ce561517"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8501f039258ce561518",
//                 "id": "670cd8501f039258ce561518"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8501f039258ce561519",
//                 "id": "670cd8501f039258ce561519"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670cd8501f039258ce56151a",
//                 "id": "670cd8501f039258ce56151a"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:04:04.916Z",
//         "__v": 0,
//         "id": "66e140e4d7b24f428474f419"
//     },
//     {
//         "_id": "66e14d36d7b24f428474f81e",
//         "name": "Fabbmate Casual Sports shoes White Sneakers for Women Girls White Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424154/1731424151593_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-0-202406162001.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424155/1731424151615_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-1-202406162001.jpg"
//         ],
//         "brand": "Fabbmate",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62343f4ee2e36a03ee96",
//                 "id": "670a62343f4ee2e36a03ee96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8201f039258ce561454",
//                 "id": "670cd8201f039258ce561454"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8201f039258ce561455",
//                 "id": "670cd8201f039258ce561455"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8201f039258ce561456",
//                 "id": "670cd8201f039258ce561456"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8201f039258ce561457",
//                 "id": "670cd8201f039258ce561457"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:56:38.417Z",
//         "__v": 0,
//         "id": "66e14d36d7b24f428474f81e"
//     },
//     {
//         "_id": "66e15fbacbb9035ac19bca85",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424713/1731424711056_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-0-202309191618.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424714/1731424711068_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-1-202309191619.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424715/1731424711126_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsahbaae9-3-202309191619.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424716/1731424711138_paragon-puk7014l-women-sandals-casual-everyday-sandals-stylish-comfortable-durable-for-daily-occasion-wear-product-images-rvsqu3p7oa-0-202309191612.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 320,
//         "oldPrice": 450,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a623c3f4ee2e36a03eec7",
//                 "id": "670a623c3f4ee2e36a03eec7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a623c3f4ee2e36a03eec8",
//                 "id": "670a623c3f4ee2e36a03eec8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7b31f039258ce5612f2",
//                 "id": "670cd7b31f039258ce5612f2"
//             }
//         ],
//         "dateCreated": "2024-09-11T09:15:38.977Z",
//         "__v": 0,
//         "id": "66e15fbacbb9035ac19bca85"
//     },
//     {
//         "_id": "66e16de3cbb9035ac19bccf6",
//         "name": "Aqualite Women Pista Green Casual Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424675/1731424673452_aqualite-women-pink-casual-shoes-product-images-rvjmglffdd-0-202305241611.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424676/1731424673487_aqualite-women-pink-casual-shoes-product-images-rvjmglffdd-3-202305241611.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62773f4ee2e36a03ef41",
//                 "id": "670a62773f4ee2e36a03ef41"
//             },
//             {
//                 "value": "ID",
//                 "label": "Indonesia",
//                 "_id": "670cd7631f039258ce561233",
//                 "id": "670cd7631f039258ce561233"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7631f039258ce561234",
//                 "id": "670cd7631f039258ce561234"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:16:03.095Z",
//         "__v": 0,
//         "id": "66e16de3cbb9035ac19bccf6"
//     },
//     {
//         "_id": "66e16ee8cbb9035ac19bcd16",
//         "name": "Paragon Women's Trendy Wedge Heel Sandals with Cushioned Sole and Sturdy Construction for Everyday Use",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424646/1731424643993_denill-brown-bellies-for-women-product-images-rvrehaibat-0-202211050253.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424647/1731424644016_denill-brown-bellies-for-women-product-images-rvrehaibat-1-202211050253.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424647/1731424644025_denill-brown-bellies-for-women-product-images-rvrehaibat-2-202211050253.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424648/1731424644025_denill-brown-bellies-for-women-product-images-rvrehaibat-3-202211050253.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 450,
//         "oldPrice": 650,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a627c3f4ee2e36a03ef72",
//                 "id": "670a627c3f4ee2e36a03ef72"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd71c1f039258ce56117e",
//                 "id": "670cd71c1f039258ce56117e"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:20:24.524Z",
//         "__v": 0,
//         "id": "66e16ee8cbb9035ac19bcd16"
//     },
//     {
//         "_id": "66e17196cbb9035ac19bce4d",
//         "name": "FLORES Stylish Fashion Backpack For Girls and boys",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424620/1731424618079_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424621/1731424618097_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-1-202402141853.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424621/1731424618113_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-2-202402141853.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424622/1731424618146_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-3-202402141853.jpg"
//         ],
//         "brand": "FLORES",
//         "price": 560,
//         "oldPrice": 590,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62843f4ee2e36a03efab",
//                 "id": "670a62843f4ee2e36a03efab"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:31:50.421Z",
//         "__v": 0,
//         "id": "66e17196cbb9035ac19bce4d"
//     },
//     {
//         "_id": "66e17237cbb9035ac19bced8",
//         "name": "Fytona Medium Laptop Backpack | Light weight For School Collage Office Tuition and Picnic | Waterproof Backpack (Grey, 25 L)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424583/1731424581814_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424584/1731424581814_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg"
//         ],
//         "brand": "Fytona",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfab3490222862ae78c7",
//         "subCat": "Boys",
//         "subCatName": "Boys",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a628c3f4ee2e36a03efec",
//                 "id": "670a628c3f4ee2e36a03efec"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb771f039258ce5620dd",
//                 "id": "670cdb771f039258ce5620dd"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:34:31.443Z",
//         "__v": 0,
//         "id": "66e17237cbb9035ac19bced8"
//     },
//     {
//         "_id": "66e293e22c48007bafc155ab",
//         "name": "DANGAR ENTERPRISE Kundan white Earring for Women and Girls-Terndy Women Pooja And Diwali Special Attractive Earrings Set For Party Occasion-Kundan work studs-Triangle Shape Kundan Stud Earring-1 Pair",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424559/1731424556943_dangar-enterprise-kundan-white-earring-for-women-and-girls-terndy-women-pooja-and-diwali-special-attractive-earrings-set-for-party-occasion-kundan-work-studs-triangle-shape-kundan-stud-earring-1-pair-product-images-rv.jpg"
//         ],
//         "brand": "DANGAR ENTERPRISE",
//         "price": 280,
//         "oldPrice": 320,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 140,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62913f4ee2e36a03f01d",
//                 "id": "670a62913f4ee2e36a03f01d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdb101f039258ce561f46",
//                 "id": "670cdb101f039258ce561f46"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb101f039258ce561f47",
//                 "id": "670cdb101f039258ce561f47"
//             }
//         ],
//         "dateCreated": "2024-09-12T07:10:26.046Z",
//         "__v": 0,
//         "id": "66e293e22c48007bafc155ab"
//     },
//     {
//         "_id": "66e50d28ea40d089af7d6bed",
//         "name": "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women | Ethnic Kurta Set for Women (set of 1) (5XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424527/1731424525359_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-0-202407161550.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424528/1731424525369_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-1-202407161550.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424529/1731424525385_vneed-women-embroidered-rayon-kurta-pant-set-kurta-set-for-women-ethnic-kurta-set-for-women-set-of-1-5xl-product-images-rvjpaqwuy9-2-202407161550.jpg"
//         ],
//         "brand": "VNEED",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62963f4ee2e36a03f06e",
//                 "id": "670a62963f4ee2e36a03f06e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdae21f039258ce561e76",
//                 "id": "670cdae21f039258ce561e76"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdae21f039258ce561e77",
//                 "id": "670cdae21f039258ce561e77"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:12:24.553Z",
//         "__v": 0,
//         "id": "66e50d28ea40d089af7d6bed"
//     },
//     {
//         "_id": "66e50df7ea40d089af7d6c1d",
//         "name": "Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424482/1731424480112_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-0-202405071920.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424483/1731424480113_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-2-202405071920.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424484/1731424480118_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-3-202405071920.webp"
//         ],
//         "brand": "Tecno",
//         "price": 12300,
//         "oldPrice": 13500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a629b3f4ee2e36a03f0a7",
//                 "id": "670a629b3f4ee2e36a03f0a7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda971f039258ce561da8",
//                 "id": "670cda971f039258ce561da8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:15:51.476Z",
//         "__v": 0,
//         "id": "66e50df7ea40d089af7d6c1d"
//     },
//     {
//         "_id": "66e50fbfea40d089af7d6c48",
//         "name": "Apple iPhone 13 128 GB, Pink",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424451/1731424449901_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424452/1731424449902_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-2-202208221207.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424453/1731424449902_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-3-202208221207.jpg"
//         ],
//         "brand": "Apple",
//         "price": 39600,
//         "oldPrice": 389000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 14,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62a13f4ee2e36a03f0d8",
//                 "id": "670a62a13f4ee2e36a03f0d8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda6b1f039258ce561cdc",
//                 "id": "670cda6b1f039258ce561cdc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cda6b1f039258ce561cdd",
//                 "id": "670cda6b1f039258ce561cdd"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:23:27.825Z",
//         "__v": 0,
//         "id": "66e50fbfea40d089af7d6c48"
//     },
//     {
//         "_id": "66e510aeea40d089af7d6c7a",
//         "name": "Aqualite's Trendy and Stylish Orange Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424434/1731424432011_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-0-202305251507.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424436/1731424432024_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-1-202305251507.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424437/1731424432054_aqualite-mens-white-royal-blue-slider-product-images-rvwvatrsa9-2-202305251507.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b13f4ee2e36a03f101",
//                 "id": "670a62b13f4ee2e36a03f101"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ee3fa94c7ca120965d8",
//                 "id": "670a7ee3fa94c7ca120965d8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:27:26.448Z",
//         "__v": 0,
//         "id": "66e510aeea40d089af7d6c7a"
//     },
//     {
//         "_id": "66e51372ea40d089af7d6d77",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425497/1731425494172_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-0-202408051114.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425498/1731425494219_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-1-202408051114.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425499/1731425494227_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rv9d1dhzig-2-202408051114.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 650,
//         "oldPrice": 690,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 13,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b63f4ee2e36a03f12a",
//                 "id": "670a62b63f4ee2e36a03f12a"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd9e71f039258ce561b48",
//                 "id": "670cd9e71f039258ce561b48"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9e71f039258ce561b49",
//                 "id": "670cd9e71f039258ce561b49"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:39:14.497Z",
//         "__v": 0,
//         "id": "66e51372ea40d089af7d6d77"
//     },
//     {
//         "_id": "66e5182cea40d089af7d6e4d",
//         "name": "Aqualite's Trendy and Stylish Pista Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425292/1731425289960_aqualite-s-trendy-and-stylish-pista-flip-flops-slides-for-women-product-images-rvy0j9wdwq-0-202304181637.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425293/1731425289963_aqualite-s-trendy-and-stylish-pista-flip-flops-slides-for-women-product-images-rvy0j9wdwq-1-202304181637.jpg"
//         ],
//         "brand": "Denill",
//         "price": 260,
//         "oldPrice": 320,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "66c0e00a3490222862ae78f1",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 165,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bb3f4ee2e36a03f153",
//                 "id": "670a62bb3f4ee2e36a03f153"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:59:24.006Z",
//         "__v": 0,
//         "id": "66e5182cea40d089af7d6e4d"
//     },
//     {
//         "_id": "66e52b5be2e06fb4c9259dd2",
//         "name": "Good Life Refined Rice Bran Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425230/1731425228228_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-0-202205172238_1.webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 230,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bf3f4ee2e36a03f17c",
//                 "id": "670a62bf3f4ee2e36a03f17c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9791f039258ce5619be",
//                 "id": "670cd9791f039258ce5619be"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:21:15.971Z",
//         "__v": 0,
//         "id": "66e52b5be2e06fb4c9259dd2"
//     },
//     {
//         "_id": "66e52bc5e2e06fb4c9259e04",
//         "name": "Gemini Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425113/1731425110507_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp"
//         ],
//         "brand": "Gemini",
//         "price": 180,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1700,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62c53f4ee2e36a03f1a5",
//                 "id": "670a62c53f4ee2e36a03f1a5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fc9fa94c7ca120969ee",
//                 "id": "670a7fc9fa94c7ca120969ee"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:23:01.356Z",
//         "__v": 0,
//         "id": "66e52bc5e2e06fb4c9259e04"
//     },
//     {
//         "_id": "66e52c1ce2e06fb4c9259e1e",
//         "name": "Saffola Gold Pro Healthy Lifestyle RiceBran Based Blended Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425056/1731425054883_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp"
//         ],
//         "brand": "Saffola",
//         "price": 150,
//         "oldPrice": 180,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ca3f4ee2e36a03f1ce",
//                 "id": "670a62ca3f4ee2e36a03f1ce"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fb7fa94c7ca120968cb",
//                 "id": "670a7fb7fa94c7ca120968cb"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:24:28.887Z",
//         "__v": 0,
//         "id": "66e52c1ce2e06fb4c9259e1e"
//     },
//     {
//         "_id": "66e52d1ce2e06fb4c9259e9e",
//         "name": "Surf Excel Matic Front Load Liquid Detergent 2 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424998/1731424995605_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-0-202210071628_1.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425000/1731424995605_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-1-202210071628.jpg"
//         ],
//         "brand": "Surf Excel",
//         "price": 356,
//         "oldPrice": 380,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dff73490222862ae78e5",
//         "subCat": "Home Care",
//         "subCatName": "Home Care",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d33f4ee2e36a03f220",
//                 "id": "670a62d33f4ee2e36a03f220"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e9afa94c7ca120964b1",
//                 "id": "670a7e9afa94c7ca120964b1"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:28:44.902Z",
//         "__v": 0,
//         "id": "66e52d1ce2e06fb4c9259e9e"
//     },
//     {
//         "_id": "66e6839f49fb19355a7a0630",
//         "name": "Muuchstac Ocean Face Wash for Men, Fights Acne & Pimple, Skin Whitening & Brightening, All Skin Types, 100 Ml Each (Pack Of 2)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424839/1731424837217_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p5969279.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424840/1731424837221_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p596927938-1-202405131243.webp"
//         ],
//         "brand": "Muuchstac",
//         "price": 178,
//         "oldPrice": 190,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d83f4ee2e36a03f249",
//                 "id": "670a62d83f4ee2e36a03f249"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc711f039258ce5626a1",
//                 "id": "670cdc711f039258ce5626a1"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:50:07.386Z",
//         "__v": 0,
//         "id": "66e6839f49fb19355a7a0630"
//     },
//     {
//         "_id": "66e6841249fb19355a7a064e",
//         "name": "Vaseline Original Care Lip Therapy 17 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424799/1731424797909_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-0-202310140619.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424800/1731424797910_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-1-202310140619.jpg"
//         ],
//         "brand": "Vaseline",
//         "price": 145,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e13f4ee2e36a03f272",
//                 "id": "670a62e13f4ee2e36a03f272"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e8afa94c7ca12096471",
//                 "id": "670a7e8afa94c7ca12096471"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:52:02.859Z",
//         "__v": 0,
//         "id": "66e6841249fb19355a7a064e"
//     },
//     {
//         "_id": "66e684ad49fb19355a7a06d9",
//         "name": "WOW Skin Science Rose Water for Face | Made with Pure Kannauj Rose Extracts | Use It As Toner, Skin Hyderator & Makeup Primer | 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424768/1731424766744_mars-hd-2in1-nutration-for-skin-foundation-golden-beige-f07-product-images-orvjaeibjcv-p603656924-0-202308051112.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731424769/1731424766744_mars-hd-2in1-nutration-for-skin-foundation-golden-beige-f07-product-images-orvjaeibjcv-p603656924-1-202308051112.webp"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 150,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 140,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e53f4ee2e36a03f29b",
//                 "id": "670a62e53f4ee2e36a03f29b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7eaefa94c7ca120964f2",
//                 "id": "670a7eaefa94c7ca120964f2"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:54:37.303Z",
//         "__v": 0,
//         "id": "66e684ad49fb19355a7a06d9"
//     },
//     {
//         "_id": "66e685cf49fb19355a7a0a5f",
//         "name": "Nisha Creme Hair Color - 3.5 Chocolate Brown 60 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426056/1731426054086_nisha-creme-hair-color-3-5-chocolate-brown-60-gm-prod-o992688-p608316872-0-202403020848.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426057/1731426054088_nisha-creme-hair-color-3-5-chocolate-brown-60-gm-prod-o992688-p608316872-1-202403020848.jpg"
//         ],
//         "brand": "Nisha",
//         "price": 160,
//         "oldPrice": 170,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ea3f4ee2e36a03f2c4",
//                 "id": "670a62ea3f4ee2e36a03f2c4"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc0f1f039258ce562421",
//                 "id": "670cdc0f1f039258ce562421"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:59:27.733Z",
//         "__v": 0,
//         "id": "66e685cf49fb19355a7a0a5f"
//     },
//     {
//         "_id": "66e6864549fb19355a7a0a9a",
//         "name": "Navratna Ayurvedic Cool Oil 200 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425981/1731425979560_navratna-ayurvedic-cool-oil-200-ml-prod-o412393-p608316522-0-202403020842.webp"
//         ],
//         "brand": "Navratna",
//         "price": 10,
//         "oldPrice": 145,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62fb3f4ee2e36a03f325",
//                 "id": "670a62fb3f4ee2e36a03f325"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbe51f039258ce56234e",
//                 "id": "670cdbe51f039258ce56234e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:01:25.456Z",
//         "__v": 0,
//         "id": "66e6864549fb19355a7a0a9a"
//     },
//     {
//         "_id": "66e6875c49fb19355a7a0b73",
//         "name": "The Gianna Ring",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425954/1731425951406_BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194.webp"
//         ],
//         "brand": "Promise Collection",
//         "price": 650,
//         "oldPrice": 780,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63033f4ee2e36a03f366",
//                 "id": "670a63033f4ee2e36a03f366"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbc11f039258ce56227a",
//                 "id": "670cdbc11f039258ce56227a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdbc11f039258ce56227b",
//                 "id": "670cdbc11f039258ce56227b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:06:04.316Z",
//         "__v": 0,
//         "id": "66e6875c49fb19355a7a0b73"
//     },
//     {
//         "_id": "66e688ed49fb19355a7a0bb7",
//         "name": "NEW GOLDEN LONG JHUMKI EARRING",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425928/1731425926157_new-golden-long-jhumki-earring-product-images-rv8v7dq4tt-0-202408011906.jpg"
//         ],
//         "brand": "JSV CAHIRA",
//         "price": 350,
//         "oldPrice": 430,
//         "catName": "Jewellery",
//         "catId": "670f54e8e86c762e3cad6cd1",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": null,
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63093f4ee2e36a03f38f",
//                 "id": "670a63093f4ee2e36a03f38f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0911f039258ce563288",
//                 "id": "670ce0911f039258ce563288"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:12:45.320Z",
//         "__v": 0,
//         "id": "66e688ed49fb19355a7a0bb7"
//     },
//     {
//         "_id": "66e6899b49fb19355a7a0bef",
//         "name": "VIBRANCE Jewellery Earrings for Women Oxidised Silver Jhumka earrings for Girls and Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425909/1731425907459_sirimiri-smer-1011-german-silver-drops-danglers-product-images-rv85yszgdo-1-202408011925.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425910/1731425907459_sirimiri-smer-1011-german-silver-drops-danglers-product-images-rv85yszgdo-2-202408011925.webp"
//         ],
//         "brand": "VIBRANCE",
//         "price": 340,
//         "oldPrice": 370,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 12,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a630e3f4ee2e36a03f3b8",
//                 "id": "670a630e3f4ee2e36a03f3b8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce05f1f039258ce5631ab",
//                 "id": "670ce05f1f039258ce5631ab"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:15:39.101Z",
//         "__v": 0,
//         "id": "66e6899b49fb19355a7a0bef"
//     },
//     {
//         "_id": "66e68a4549fb19355a7a0c1b",
//         "name": "SIRIMIRI SMER-1011 German Silver Drops & Danglers",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425872/1731425869549_sukkhi-astonish-kundan-gold-plated-pearl-chandelier-earring-for-women-product-images-rv9je8a3um-0-202202250139.jpg"
//         ],
//         "brand": "SIRIMIRI",
//         "price": 260,
//         "oldPrice": 290,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63133f4ee2e36a03f3e1",
//                 "id": "670a63133f4ee2e36a03f3e1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0161f039258ce5630cf",
//                 "id": "670ce0161f039258ce5630cf"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:18:29.173Z",
//         "__v": 0,
//         "id": "66e68a4549fb19355a7a0c1b"
//     },
//     {
//         "_id": "66e68b1049fb19355a7a0c4e",
//         "name": "Zandu Chyavanprashad With No Added Sugar 900 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425845/1731425843410_zandu-chyavanprashad-with-no-added-sugar-900-gm-prod-o1096116-p608315853-0-202403020815.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425846/1731425843410_zandu-chyavanprashad-with-no-added-sugar-900-gm-prod-o1096116-p608315853-1-202403020815.jpg"
//         ],
//         "brand": "Zandu",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63173f4ee2e36a03f40a",
//                 "id": "670a63173f4ee2e36a03f40a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fe6fa94c7ca12096a98",
//                 "id": "670a7fe6fa94c7ca12096a98"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:21:52.774Z",
//         "__v": 0,
//         "id": "66e68b1049fb19355a7a0c4e"
//     },
//     {
//         "_id": "66e68c51e51aa3db51455710",
//         "name": "Conbre MultipleXR2 Pro {Upgraded} HD Smart WiFi Wireless IP CCTV Security Camera | Night Vision | 2-Way Audio | Support 64 GB Micro SD Card Slot",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729064609/1729064607699_conbre-multiplexr2-pro-upgraded-hd-smart-wifi-wireless-ip-cctv-security-camera-night-vision-2-way-audio-support-64-gb-micro-sd-card-slot-product-images-orvnkptvicq-p594015290-0-202304040248.webp",
//             "https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729064611/1729064607699_conbre-multiplexr2-pro-upgraded-hd-smart-wifi-wireless-ip-cctv-security-camera-night-vision-2-way-audio-support-64-gb-micro-sd-card-slot-product-images-orvnkptvicq-p594015290-2-202304040248.jpg"
//         ],
//         "brand": "Conbre",
//         "price": 1450,
//         "oldPrice": 1760,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a631b3f4ee2e36a03f433",
//                 "id": "670a631b3f4ee2e36a03f433"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf9a1f039258ce562f0e",
//                 "id": "670cdf9a1f039258ce562f0e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:27:13.034Z",
//         "__v": 0,
//         "id": "66e68c51e51aa3db51455710"
//     },
//     {
//         "_id": "66e68d24e51aa3db51455749",
//         "name": "Sony Alpha ILCE-7M3 Full-Frame 24.2MP Mirrorless Digital SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD, Low Light Camera), Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425789/1731425787258_sony-alpha-ilce-7m3-full-frame-24-2mp-mirrorless-digital-slr-camera-body-4k-full-frame-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-low-light-camera-black-digital-o491362603-p590038915-0-202009260.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425790/1731425787270_sony-alpha-ilce-7m3-full-frame-24-2mp-mirrorless-digital-slr-camera-body-4k-full-frame-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-low-light-camera-black-digital-o491362603-p590038915-1-202009260.webp"
//         ],
//         "brand": "Sony",
//         "price": 45000,
//         "oldPrice": 90000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63213f4ee2e36a03f45c",
//                 "id": "670a63213f4ee2e36a03f45c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf6b1f039258ce562e34",
//                 "id": "670cdf6b1f039258ce562e34"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:30:44.015Z",
//         "__v": 0,
//         "id": "66e68d24e51aa3db51455749"
//     },
//     {
//         "_id": "66e68e27e51aa3db514558cd",
//         "name": "boAt Wave Fury Smartwatch with 4.64 cm (1.83 inch) HD Display, Advanced Bluetooth Calling, Functional Crown, 50+ Sports mode, IP67 Dust, Sweat & Splash Resistant (Active Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425731/1731425729133_boat-wave-fury-smartwatch-with-4-64-cm-1-83-inch-hd-display-advanced-bluetooth-calling-functional-crown-50-sports-mode-ip67-dust-sweat-splash-resistant-active-black-digital-o494422055-p609566921-0-20240723183.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731425732/1731425729134_boat-wave-fury-smartwatch-with-4-64-cm-1-83-inch-hd-display-advanced-bluetooth-calling-functional-crown-50-sports-mode-ip67-dust-sweat-splash-resistant-active-black-digital-o494422055-p609566921-1-20240723183.webp"
//         ],
//         "brand": "boAt",
//         "price": 1800,
//         "oldPrice": 2100,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63343f4ee2e36a03f485",
//                 "id": "670a63343f4ee2e36a03f485"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf3a1f039258ce562d5b",
//                 "id": "670cdf3a1f039258ce562d5b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:35:03.008Z",
//         "__v": 0,
//         "id": "66e68e27e51aa3db514558cd"
//     },
//     {
//         "_id": "66e68ecae51aa3db5145595b",
//         "name": "Morden Smart Watch for Kids Men Women Boys Girls D116 Water Proof Touchscreen Smart Watch Bluetooth 1.44 HD Screen Smart Watch with Daily Activity Tracker, Heart Rate Sensor, Sleep Monitor - Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426106/1731426104931_morden-smart-watch-for-kids-men-women-boys-girls-d116-water-proof-touchscreen-smart-watch-bluetooth-1-44-hd-screen-smart-watch-with-daily-activity-tracker-heart-rate-sensor-sleep-monitor-black-product-images-.webp"
//         ],
//         "brand": "Morden",
//         "price": 2500,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1400,
//         "rating": 2,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63393f4ee2e36a03f4ae",
//                 "id": "670a63393f4ee2e36a03f4ae"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf0b1f039258ce562c83",
//                 "id": "670cdf0b1f039258ce562c83"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:37:46.263Z",
//         "__v": 0,
//         "id": "66e68ecae51aa3db5145595b"
//     },
//     {
//         "_id": "66e6ffb410ba0832baba6689",
//         "name": "Mars HD 2IN1 Nutration For Skin Foundation Golden Beige-F07",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426161/1731426158910_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-0-202304241416.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426162/1731426158910_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-1-202304241416.jpg"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63b03f4ee2e36a03f4fb",
//                 "id": "670a63b03f4ee2e36a03f4fb"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdecb1f039258ce562bac",
//                 "id": "670cdecb1f039258ce562bac"
//             }
//         ],
//         "dateCreated": "2024-09-15T15:39:32.052Z",
//         "__v": 0,
//         "id": "66e6ffb410ba0832baba6689"
//     },
//     {
//         "_id": "66e7fe39cd09356c5b465f45",
//         "name": "pink solid casual shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426306/1731426304903_zoom_0-1673275594.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426307/1731426304903_zoom_1-1673275594.webp"
//         ],
//         "brand": "V-Mart",
//         "price": 459,
//         "oldPrice": 495,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ca3f4ee2e36a03f52c",
//                 "id": "670a63ca3f4ee2e36a03f52c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cde281f039258ce562ad6",
//                 "id": "670cde281f039258ce562ad6"
//             }
//         ],
//         "dateCreated": "2024-09-16T09:45:29.901Z",
//         "__v": 0,
//         "id": "66e7fe39cd09356c5b465f45"
//     },
//     {
//         "_id": "66e8eafa3decb32ae2a77c6e",
//         "name": "Jobayed Hossain",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426335/1731426332371_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426335/1731426332380_1000014029787-Green-GREEN-1000014029787_02-2100.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426336/1731426332383_1000014029787-Green-GREEN-1000014029787_03-2100.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426337/1731426332384_1000014029787-Green-GREEN-1000014029787_04-2100.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426338/1731426332428_1000014029787-Green-GREEN-1000014029787_05-2100.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426339/1731426332428_1000014029787-Green-GREEN-1000014029787_06-2100.jpg"
//         ],
//         "brand": "V-Mart",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1800,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d13f4ee2e36a03f56f",
//                 "id": "670a63d13f4ee2e36a03f56f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0b31a0c5f1ae830f869",
//                 "id": "670aa0b31a0c5f1ae830f869"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0b31a0c5f1ae830f86a",
//                 "id": "670aa0b31a0c5f1ae830f86a"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:35:38.759Z",
//         "__v": 0,
//         "id": "66e8eafa3decb32ae2a77c6e"
//     },
//     {
//         "_id": "66e8ed483decb32ae2a77ca6",
//         "name": "beatXP Unbound Era 2.01\" Super AMOLED Display Bluetooth Calling Smart Watch, Metal Body, Rotary Crown, 410 * 502px, 1000 Nits, 60Hz Refresh Rate, 100+ Sports Modes (Black)",
//         "description": "Introducing the beatXP Unbound Era smartwatch - the latest in smartwatch technology. This device has an impressive 2.01-inch Super AMOLED Display with a 60Hz refresh rate and a peak brightness of 1000 Nits. It also features an Always On Display. The EzyPair Technology feature allows for seamless communication via Advanced Bluetooth calling, without requiring a phone.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426367/1731426364991_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-0-202303181240.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426369/1731426364991_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-1-202303181240.webp"
//         ],
//         "brand": "beatXP",
//         "price": 1200,
//         "oldPrice": 1250,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d63f4ee2e36a03f5d0",
//                 "id": "670a63d63f4ee2e36a03f5d0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce3911f039258ce563a99",
//                 "id": "670ce3911f039258ce563a99"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:45:28.831Z",
//         "__v": 0,
//         "id": "66e8ed483decb32ae2a77ca6"
//     },
//     {
//         "_id": "66e8ee313decb32ae2a77cfc",
//         "name": "vHP 15-fb0082AX Victus Gaming Laptop(AMD Ryzen5-5600H /8GB/512GB SSD/4 GB Nvidia GeForce RTX 3050 Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426400/1731426397947_hp-15-fb0082ax-victus-gaming-laptop-amd-ryzen5-5600h-8gb-512gb-ssd-4-gb-nvidia-geforce-rtx-3050-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-digital-o493178411-p594412844-0-202406241824.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426401/1731426397949_hp-15-fb0082ax-victus-gaming-laptop-amd-ryzen5-5600h-8gb-512gb-ssd-4-gb-nvidia-geforce-rtx-3050-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-digital-o493178411-p594412844-1-202406241824.jpg"
//         ],
//         "brand": "HP",
//         "price": 25000,
//         "oldPrice": 28000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [
//             "6GB",
//             "8GB",
//             "10GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63db3f4ee2e36a03f5f9",
//                 "id": "670a63db3f4ee2e36a03f5f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce35d1f039258ce5639b3",
//                 "id": "670ce35d1f039258ce5639b3"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:49:21.389Z",
//         "__v": 0,
//         "id": "66e8ee313decb32ae2a77cfc"
//     },
//     {
//         "_id": "66e8ef403decb32ae2a77db4",
//         "name": "Glowworld Women Blue Printed Cotton Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426481/1731426479928_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426482/1731426479930_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426483/1731426479934_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg"
//         ],
//         "brand": "Glowworld",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e03f4ee2e36a03f622",
//                 "id": "670a63e03f4ee2e36a03f622"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2b11f039258ce5638ce",
//                 "id": "670ce2b11f039258ce5638ce"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:53:52.237Z",
//         "__v": 0,
//         "id": "66e8ef403decb32ae2a77db4"
//     },
//     {
//         "_id": "66e8f0793decb32ae2a77e65",
//         "name": "Siril Georgette Brown Color Saree with Blouse piece",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426525/1731426523415_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426526/1731426523420_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426527/1731426523427_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426527/1731426523431_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
//         ],
//         "brand": "SIRIL",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e43f4ee2e36a03f64b",
//                 "id": "670a63e43f4ee2e36a03f64b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2771f039258ce5637ea",
//                 "id": "670ce2771f039258ce5637ea"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:59:05.066Z",
//         "__v": 0,
//         "id": "66e8f0793decb32ae2a77e65"
//     },
//     {
//         "_id": "66ea3a08c017f4365fafc3e2",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426749/1731426747475_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-0-202405211637.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426750/1731426747491_flores-stylish-fashion-backpack-for-girls-and-boys-product-images-rv9zqkovyh-1-202405211637.jpg"
//         ],
//         "brand": "LIVE FASHION",
//         "price": 3500,
//         "oldPrice": 450,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e93f4ee2e36a03f674",
//                 "id": "670a63e93f4ee2e36a03f674"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0081a0c5f1ae830f573",
//                 "id": "670aa0081a0c5f1ae830f573"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0081a0c5f1ae830f574",
//                 "id": "670aa0081a0c5f1ae830f574"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0081a0c5f1ae830f575",
//                 "id": "670aa0081a0c5f1ae830f575"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:25:12.268Z",
//         "__v": 0,
//         "id": "66ea3a08c017f4365fafc3e2"
//     },
//     {
//         "_id": "66ea3ba5c017f4365fafc472",
//         "name": "beatXP Vega X 1.43\" Super AMOLED Display, One-Tap BT 5.2 Calling, Metal Body, 60Hz Refresh Rate, WIRELESS CHARGING, AI Voice Assistant Smartwatch (Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426794/1731426791384_beatxp-unbound-era-2-01-super-amoled-display-bluetooth-calling-smart-watch-metal-body-rotary-crown-410-502px-1000-nits-60hz-refresh-rate-100-sports-modes-black-product-images-orv6i4axy8v-p606246617-0-20231219.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426794/1731426791390_beatxp-unbound-era-2-01-super-amoled-display-bluetooth-calling-smart-watch-metal-body-rotary-crown-410-502px-1000-nits-60hz-refresh-rate-100-sports-modes-black-product-images-orv6i4axy8v-p606246617-1-202312191.jpg"
//         ],
//         "brand": "beatXP",
//         "price": 1300,
//         "oldPrice": 1350,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ed3f4ee2e36a03f69d",
//                 "id": "670a63ed3f4ee2e36a03f69d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1d61f039258ce56361a",
//                 "id": "670ce1d61f039258ce56361a"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:32:05.013Z",
//         "__v": 0,
//         "id": "66ea3ba5c017f4365fafc472"
//     },
//     {
//         "_id": "66ea3f14c017f4365fafc692",
//         "name": "Apple iPhone 15 256GB Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427383/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-0-202309141646.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427384/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-1-202309141252.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427384/1731427380870_apple-iphone-15-256gb-black-digital-o493839314-p604568785-2-202309141252.webp"
//         ],
//         "brand": "Apple",
//         "price": 32000,
//         "oldPrice": 33500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [
//             "8GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f23f4ee2e36a03f6c6",
//                 "id": "670a63f23f4ee2e36a03f6c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1aa1f039258ce563536",
//                 "id": "670ce1aa1f039258ce563536"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670ce1aa1f039258ce563537",
//                 "id": "670ce1aa1f039258ce563537"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:46:44.870Z",
//         "__v": 0,
//         "id": "66ea3f14c017f4365fafc692"
//     },
//     {
//         "_id": "670771e115f0a6583af1cbc1",
//         "name": "Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen, IPX5 Water Resistance, Heart Rate, SPO2, Upto 7 days battery, Berry Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427356/1731427353236_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-2-202401240757.webp"
//         ],
//         "brand": "ALT",
//         "price": 2400,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f63f4ee2e36a03f6ef",
//                 "id": "670a63f63f4ee2e36a03f6ef"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a6f2b150631d6b104798d",
//                 "id": "670a6f2b150631d6b104798d"
//             },
//             {
//                 "value": "AD",
//                 "label": "Andorra",
//                 "_id": "670a6ff4150631d6b104811b",
//                 "id": "670a6ff4150631d6b104811b"
//             }
//         ],
//         "dateCreated": "2024-10-10T06:19:13.027Z",
//         "__v": 0,
//         "id": "670771e115f0a6583af1cbc1"
//     },
//     {
//         "_id": "670a5a647b760ed48b5b6fbe",
//         "name": "Buy New Trend Women Black Cotton Blend Top | top for women | women top | top for women | women top",
//         "description": "For girl's seeking a ethnic set that melds classic charm with a contemporary twist, Trilok Fab flared ethnic gown is a perfect choice. It is designed with both comfort and style in mind, this maxi length gown is made to feel luxurious against the skin. The flowing flares allow for ease of movement, ensuring you feel as good as you look throughout the entire event. Despite the occasion that you want to wear it for, this dress leaves a lasting impression of refined elegance wherever you go.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427102/1731427099768_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427103/1731427099785_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427104/1731427099807_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427105/1731427099848_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg"
//         ],
//         "brand": "Trilok Fab",
//         "price": 1500,
//         "oldPrice": 2200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a5a647b760ed48b5b6fbf",
//                 "id": "670a5a647b760ed48b5b6fbf"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a5a647b760ed48b5b6fc0",
//                 "id": "670a5a647b760ed48b5b6fc0"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a5dd47b760ed48b5b7031",
//                 "id": "670a5dd47b760ed48b5b7031"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670ce0cb1f039258ce56336c",
//                 "id": "670ce0cb1f039258ce56336c"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670ce0cb1f039258ce56336d",
//                 "id": "670ce0cb1f039258ce56336d"
//             }
//         ],
//         "dateCreated": "2024-10-12T11:15:48.297Z",
//         "__v": 0,
//         "id": "670a5a647b760ed48b5b6fbe"
//     },
//     {
//         "_id": "670b4d0961347e5c638f893f",
//         "name": "women red round neck kurta pant set with dupatta",
//         "description": "Save your time mixing and matching various ethnic pieces and invest in beautiful kurta pant set ethnic sets from Ishin brands that give a well-fitted look in all styles.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427031/1731427029451_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427032/1731427029454_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427033/1731427029456_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427034/1731427029460_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-3-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427035/1731427029467_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-4-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427036/1731427029498_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-5-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427037/1731427029505_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-6-202310141511.jpg"
//         ],
//         "brand": "Ishin",
//         "price": 1500,
//         "oldPrice": 1700,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b4d0961347e5c638f8940",
//                 "id": "670b4d0961347e5c638f8940"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b4d0961347e5c638f8941",
//                 "id": "670b4d0961347e5c638f8941"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670b4d0961347e5c638f8942",
//                 "id": "670b4d0961347e5c638f8942"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b4d0961347e5c638f8943",
//                 "id": "670b4d0961347e5c638f8943"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b4d0961347e5c638f8944",
//                 "id": "670b4d0961347e5c638f8944"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:31:05.278Z",
//         "__v": 0,
//         "id": "670b4d0961347e5c638f893f"
//     },
//     {
//         "_id": "670b52bc61347e5c638f912a",
//         "name": "men checkered long sleeve casual shirt",
//         "description": "Be a head turner by wearing this casual shirt from BUSHIRT and grab it in brown colour.\nShowcase this top in wonderful prints and wear it for different occasions.\nBuy this outstanding collection in a 47 size & get it in fabric made of cotton material.\nBored of the conventional shirt look? Well, these casual shirts in graceful neck designs and long sleeves will give you a whole new dimension!\nLook dapper in casual shirts priced at ₹1199 and benefit 60% .",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426970/1731426968400_51SLVpZUiwL._SX569_.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426971/1731426968400_71pl1-LoQ8L._SX569_.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426972/1731426968400_71US9Oi3OiL._SX569_.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426972/1731426968401_81v1UTEpELL._SX569_.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426974/1731426968411_91hJrlzHi_L._SX569_.jpg"
//         ],
//         "brand": "BUSHIRT",
//         "price": 850,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b52bc61347e5c638f912b",
//                 "id": "670b52bc61347e5c638f912b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b52bc61347e5c638f912c",
//                 "id": "670b52bc61347e5c638f912c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b52bc61347e5c638f912d",
//                 "id": "670b52bc61347e5c638f912d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b52bc61347e5c638f912e",
//                 "id": "670b52bc61347e5c638f912e"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:55:24.244Z",
//         "__v": 0,
//         "id": "670b52bc61347e5c638f912a"
//     },
//     {
//         "_id": "670b88d7acc986ed5b012079",
//         "name": "Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set",
//         "description": "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426914/1731426912067_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426915/1731426912070_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg"
//         ],
//         "brand": "Deel band",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b88d7acc986ed5b01207a",
//                 "id": "670b88d7acc986ed5b01207a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b88d7acc986ed5b01207b",
//                 "id": "670b88d7acc986ed5b01207b"
//             },
//             {
//                 "value": "KE",
//                 "label": "Kenya",
//                 "_id": "670b88d7acc986ed5b01207c",
//                 "id": "670b88d7acc986ed5b01207c"
//             }
//         ],
//         "dateCreated": "2024-10-13T08:46:15.277Z",
//         "__v": 0,
//         "id": "670b88d7acc986ed5b012079"
//     },
//     {
//         "_id": "670bff5ddefdab066b32758b",
//         "name": "GESPO Peach Solid Mandarin Collar Half Sleeve Casual T-Shirt",
//         "description": "Rs: Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasio.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426878/1731426875868_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426879/1731426875869_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-1-202304080900.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426880/1731426875884_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-2-202304080900.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731426881/1731426875923_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-3-202304080900.webp"
//         ],
//         "brand": "GESPO",
//         "price": 1500,
//         "oldPrice": 2000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 9,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670bff5ddefdab066b32758c",
//                 "id": "670bff5ddefdab066b32758c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670bff5ddefdab066b32758d",
//                 "id": "670bff5ddefdab066b32758d"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670bff5ddefdab066b32758e",
//                 "id": "670bff5ddefdab066b32758e"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670bff5ddefdab066b32758f",
//                 "id": "670bff5ddefdab066b32758f"
//             },
//             {
//                 "value": "EC",
//                 "label": "Ecuador",
//                 "_id": "6716dcc3faf0ddf988e78dbc",
//                 "id": "6716dcc3faf0ddf988e78dbc"
//             }
//         ],
//         "dateCreated": "2024-10-13T17:11:57.651Z",
//         "__v": 0,
//         "id": "670bff5ddefdab066b32758b"
//     },
//     {
//         "_id": "6734647d6380d4e40d6484f8",
//         "name": "EYEBOGLER Teal Tshirts/Men tshirt/ tshirt for men/ tshirt/ mens tshirt/ Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486841/1731486838744_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-0-202402111537.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486842/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-1-202402111537.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486843/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-2-202402111537.jpg"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 650,
//         "oldPrice": 950,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6734647d6380d4e40d6484f9",
//                 "id": "6734647d6380d4e40d6484f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6734647d6380d4e40d6484fa",
//                 "id": "6734647d6380d4e40d6484fa"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6734647d6380d4e40d6484fb",
//                 "id": "6734647d6380d4e40d6484fb"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "6734647d6380d4e40d6484fc",
//                 "id": "6734647d6380d4e40d6484fc"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "6734647d6380d4e40d6484fd",
//                 "id": "6734647d6380d4e40d6484fd"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "6734647d6380d4e40d6484fe",
//                 "id": "6734647d6380d4e40d6484fe"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:34:05.526Z",
//         "__v": 0,
//         "id": "6734647d6380d4e40d6484f8"
//     },
//     {
//         "_id": "673464ff6380d4e40d64858f",
//         "name": "EYEBOGLER Polo Tshirts for Men | T Shirt For Men | Men T Shirt | Men Tshirt | Tshirt for Men | T Shirts | Tshirts | Oversized Tshirt | Men Tshirt | Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt | Printed Tshirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486972/1731486966499_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-0-202301180235.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486973/1731486966501_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-1-202301180235.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486973/1731486966504_eyebogler-men-s-solid-polo-neck-half-sleeves-t-shirt-product-images-rv2b61cz8y-2-202301180235.webp"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 785,
//         "oldPrice": 995,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673464ff6380d4e40d648590",
//                 "id": "673464ff6380d4e40d648590"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673464ff6380d4e40d648591",
//                 "id": "673464ff6380d4e40d648591"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "673464ff6380d4e40d648592",
//                 "id": "673464ff6380d4e40d648592"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673464ff6380d4e40d648593",
//                 "id": "673464ff6380d4e40d648593"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673464ff6380d4e40d648594",
//                 "id": "673464ff6380d4e40d648594"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "673464ff6380d4e40d648595",
//                 "id": "673464ff6380d4e40d648595"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "673464ff6380d4e40d648596",
//                 "id": "673464ff6380d4e40d648596"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:36:15.091Z",
//         "__v": 0,
//         "id": "673464ff6380d4e40d64858f"
//     },
//     {
//         "_id": "673467b76380d4e40d648762",
//         "name": "Men Layerr Regular Fit Spread Collar Cotton Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487665/1731487663446_0eb0c310-0fd5-42bb-8bfd-0bedb047166f1711689666424-RARE-RABBIT-Men-Layerr-Regular-Fit-Spread-Collar-Cotton-Shir-11.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487666/1731487663448_961a285d-a1ac-4e93-b773-72d987ae20131707997689284RARERABBITMenStandardOpaqueCasualShirt2.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487667/1731487663449_de8dbd08-e78c-441c-a906-9b67588a50e31707997689260RARERABBITMenStandardOpaqueCasualShirt1.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487667/1731487663451_fbab6e61-3333-45e4-9164-72c74be2e4451707997689278RARERABBITMenStandardOpaqueCasualShirt4.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731487668/1731487663452_fe1a609f-1e87-4cc9-814b-d6fcd84ab37e1707997689290RARERABBITMenStandardOpaqueCasualShirt3.jpg"
//         ],
//         "brand": "RARE RABBIT",
//         "price": 950,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Casual Shirts",
//         "thirdsubCatName": "Casual Shirts",
//         "thirdsubCatId": "673439806380d4e40d647b3a",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673467b76380d4e40d648763",
//                 "id": "673467b76380d4e40d648763"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673467b76380d4e40d648764",
//                 "id": "673467b76380d4e40d648764"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673467b76380d4e40d648765",
//                 "id": "673467b76380d4e40d648765"
//             },
//             {
//                 "value": "NZ",
//                 "label": "New Zealand",
//                 "_id": "673467b76380d4e40d648766",
//                 "id": "673467b76380d4e40d648766"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673467b76380d4e40d648767",
//                 "id": "673467b76380d4e40d648767"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "673467b76380d4e40d648768",
//                 "id": "673467b76380d4e40d648768"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:47:51.822Z",
//         "__v": 0,
//         "id": "673467b76380d4e40d648762"
//     },
//     {
//         "_id": "67346a136380d4e40d648974",
//         "name": "Chikankari Woven Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504197/1731504193013_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504198/1731504193058_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504199/1731504193079_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504200/1731504193385_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-3-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504201/1731504193389_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-4-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504202/1731504193411_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-5-202310141511.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731504203/1731504193413_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-6-202310141511.jpg"
//         ],
//         "brand": "House of Chikankari",
//         "price": 1200,
//         "oldPrice": 1350,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346a136380d4e40d648975",
//                 "id": "67346a136380d4e40d648975"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346a136380d4e40d648976",
//                 "id": "67346a136380d4e40d648976"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67346a136380d4e40d648977",
//                 "id": "67346a136380d4e40d648977"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "67346a136380d4e40d648978",
//                 "id": "67346a136380d4e40d648978"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:57:55.488Z",
//         "__v": 0,
//         "id": "67346a136380d4e40d648974"
//     },
//     {
//         "_id": "67346b3c6380d4e40d648b1f",
//         "name": "A-Line Kurti With Sharara & Dupatta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488540/1731488537570_6ql844nM_8c9eb23be2844d5eb26a30a38ed55217.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488542/1731488537579_uMtsM8cA_69a12424597845f99dcf8f22ddf68626.jpg",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488543/1731488537586_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg"
//         ],
//         "brand": "Sangria",
//         "price": 1300,
//         "oldPrice": 1450,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 250,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346b3c6380d4e40d648b20",
//                 "id": "67346b3c6380d4e40d648b20"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67346b3c6380d4e40d648b21",
//                 "id": "67346b3c6380d4e40d648b21"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346b3c6380d4e40d648b22",
//                 "id": "67346b3c6380d4e40d648b22"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "67346b3c6380d4e40d648b23",
//                 "id": "67346b3c6380d4e40d648b23"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "67346b3c6380d4e40d648b24",
//                 "id": "67346b3c6380d4e40d648b24"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "67346b3c6380d4e40d648b25",
//                 "id": "67346b3c6380d4e40d648b25"
//             }
//         ],
//         "dateCreated": "2024-11-13T09:02:52.829Z",
//         "__v": 0,
//         "id": "67346b3c6380d4e40d648b1f"
//     },
//     {
//         "_id": "6741677912b4da68b1670fd0",
//         "name": "Pro360 MOM Pro Nutritional Powder - Swiss Chocolate 200 g",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732339260/1732339260271_pro360-mom-nutritional-powder-swiss-chocolate-200-gm-prod-o1041678-p608315808-0-202403020814.webp"
//         ],
//         "brand": "Pro360",
//         "price": 445,
//         "oldPrice": 345,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 34,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741677912b4da68b1670fd1",
//                 "id": "6741677912b4da68b1670fd1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741677912b4da68b1670fd2",
//                 "id": "6741677912b4da68b1670fd2"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741677912b4da68b1670fd3",
//                 "id": "6741677912b4da68b1670fd3"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:26:17.758Z",
//         "__v": 0,
//         "id": "6741677912b4da68b1670fd0"
//     },
//     {
//         "_id": "6741686e12b4da68b167150c",
//         "name": "Good Home Air Freshener - Lavender 50 gm",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732339815/1732339814920_good-home-air-freshener-lavender-50-gm-prod-o1069771-p608296754-0-202403020001.jpg"
//         ],
//         "brand": "Good Home",
//         "price": 78,
//         "oldPrice": 99,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 20,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741686e12b4da68b167150d",
//                 "id": "6741686e12b4da68b167150d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741686e12b4da68b167150e",
//                 "id": "6741686e12b4da68b167150e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741686e12b4da68b167150f",
//                 "id": "6741686e12b4da68b167150f"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741686e12b4da68b1671510",
//                 "id": "6741686e12b4da68b1671510"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:30:22.064Z",
//         "__v": 0,
//         "id": "6741686e12b4da68b167150c"
//     },
//     {
//         "_id": "6741697812b4da68b1671728",
//         "name": "Protinex Powder - Rich Chocolate Flavour (Jar) 400 gm",
//         "description": "Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732340079/1732340079091_protinex-powder-rich-chocolate-flavour-jar-400-gm-prod-o1091131-p608299738-0-202403020120.jpg"
//         ],
//         "brand": "Protinex",
//         "price": 549,
//         "oldPrice": 649,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741697812b4da68b1671729",
//                 "id": "6741697812b4da68b1671729"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741697812b4da68b167172a",
//                 "id": "6741697812b4da68b167172a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741697812b4da68b167172b",
//                 "id": "6741697812b4da68b167172b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741697812b4da68b167172c",
//                 "id": "6741697812b4da68b167172c"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:34:48.245Z",
//         "__v": 0,
//         "id": "6741697812b4da68b1671728"
//     },
//     {
//         "_id": "67416aa212b4da68b1671ac2",
//         "name": "SEBAMED CLEANSING BAR 100gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732340370/1732340370022_sebamed-cleansing-bar-100gm-prod-o373797-p608299470-0-202411191631.jpg"
//         ],
//         "brand": "Sebamed",
//         "price": 270,
//         "oldPrice": 310,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67416aa212b4da68b1671ac3",
//                 "id": "67416aa212b4da68b1671ac3"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67416aa212b4da68b1671ac4",
//                 "id": "67416aa212b4da68b1671ac4"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67416aa212b4da68b1671ac5",
//                 "id": "67416aa212b4da68b1671ac5"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67416aa212b4da68b1671ac6",
//                 "id": "67416aa212b4da68b1671ac6"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:39:46.831Z",
//         "__v": 0,
//         "id": "67416aa212b4da68b1671ac2"
//     },
//     {
//         "_id": "6742b5521b10adfb939ed505",
//         "name": "Dermistry Anti Aging Intense Nourishing Night Repair Cream 50 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425029/1732425028729_dermistry-intense-nourishing-night-cream-50-ml-prod-o1130060-p607840425-0-202402092238.webp"
//         ],
//         "brand": "DERMISTRY",
//         "price": 281,
//         "oldPrice": 233,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b5521b10adfb939ed506",
//                 "id": "6742b5521b10adfb939ed506"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b5521b10adfb939ed507",
//                 "id": "6742b5521b10adfb939ed507"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b5521b10adfb939ed508",
//                 "id": "6742b5521b10adfb939ed508"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b5521b10adfb939ed509",
//                 "id": "6742b5521b10adfb939ed509"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:10:42.028Z",
//         "__v": 0,
//         "id": "6742b5521b10adfb939ed505"
//     },
//     {
//         "_id": "6742b61f1b10adfb939ede1f",
//         "name": "Inlife Super Reds Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425238/1732425238312_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg"
//         ],
//         "brand": "Inlife",
//         "price": 999,
//         "oldPrice": 879,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b61f1b10adfb939ede20",
//                 "id": "6742b61f1b10adfb939ede20"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b61f1b10adfb939ede21",
//                 "id": "6742b61f1b10adfb939ede21"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b61f1b10adfb939ede22",
//                 "id": "6742b61f1b10adfb939ede22"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b61f1b10adfb939ede23",
//                 "id": "6742b61f1b10adfb939ede23"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:14:07.452Z",
//         "__v": 0,
//         "id": "6742b61f1b10adfb939ede1f"
//     },
//     {
//         "_id": "6742b72e1b10adfb939ee557",
//         "name": "Inlife Super Greens Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425504/1732425504382_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp"
//         ],
//         "brand": "Inlife",
//         "price": 799,
//         "oldPrice": 899,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b72e1b10adfb939ee558",
//                 "id": "6742b72e1b10adfb939ee558"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b72e1b10adfb939ee559",
//                 "id": "6742b72e1b10adfb939ee559"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b72e1b10adfb939ee55a",
//                 "id": "6742b72e1b10adfb939ee55a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b72e1b10adfb939ee55b",
//                 "id": "6742b72e1b10adfb939ee55b"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:18:38.670Z",
//         "__v": 0,
//         "id": "6742b72e1b10adfb939ee557"
//     },
//     {
//         "_id": "6742b8921b10adfb939eeb9e",
//         "name": "Fostelo Women's Meryl Handbag (Maroon) (JM_FSB-1747)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732425866/1732425866124_fostelo-women-s-meryl-handbag-maroon-jm_fsb-1747-product-images-rvrf16ea4d-0-202212072158.jpg"
//         ],
//         "brand": "FOSTELO",
//         "price": 589,
//         "oldPrice": 455,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b8921b10adfb939eeb9f",
//                 "id": "6742b8921b10adfb939eeb9f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b8921b10adfb939eeba0",
//                 "id": "6742b8921b10adfb939eeba0"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b8921b10adfb939eeba1",
//                 "id": "6742b8921b10adfb939eeba1"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b8921b10adfb939eeba2",
//                 "id": "6742b8921b10adfb939eeba2"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:24:34.076Z",
//         "__v": 0,
//         "id": "6742b8921b10adfb939eeb9e"
//     },
//     {
//         "_id": "6742b9e71b10adfb939ef25e",
//         "name": "Kerala Naturals Rose Water 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426209/1732426209389_kerala-naturals-rose-water-100-ml-prod-o906610-p608297587-0-202403020016.jpg"
//         ],
//         "brand": "Kerala Naturals",
//         "price": 119,
//         "oldPrice": 98,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b9e71b10adfb939ef25f",
//                 "id": "6742b9e71b10adfb939ef25f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b9e71b10adfb939ef260",
//                 "id": "6742b9e71b10adfb939ef260"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b9e71b10adfb939ef261",
//                 "id": "6742b9e71b10adfb939ef261"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b9e71b10adfb939ef262",
//                 "id": "6742b9e71b10adfb939ef262"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:30:15.100Z",
//         "__v": 0,
//         "id": "6742b9e71b10adfb939ef25e"
//     },
//     {
//         "_id": "6742baca1b10adfb939efa95",
//         "name": "Dr Batra's Natural Cleansing Milk - Echinacea & Chamomile (Pack of 3 x 100 ml)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426436/1732426436350_dr-batra-s-natural-cleansing-milk-echinacea-chamomile-pack-of-3-x-100-ml-prod-o1018971-p608297679-2-202403020018.jpg"
//         ],
//         "brand": "Dr Batra'S",
//         "price": 556,
//         "oldPrice": 456,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 67,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742baca1b10adfb939efa96",
//                 "id": "6742baca1b10adfb939efa96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742baca1b10adfb939efa97",
//                 "id": "6742baca1b10adfb939efa97"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742baca1b10adfb939efa98",
//                 "id": "6742baca1b10adfb939efa98"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742baca1b10adfb939efa99",
//                 "id": "6742baca1b10adfb939efa99"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:34:02.708Z",
//         "__v": 0,
//         "id": "6742baca1b10adfb939efa95"
//     },
//     {
//         "_id": "6742bcab1b10adfb939f0448",
//         "name": "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)/Octa-core/4GB RAM/64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 grams)/Dual band WiFi + SIM/Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732426917/1732426917570_jiobook-11-2023-ultimate-learning-partner-nb1112mm-blu-4g-lte-mediatek-2-0-ghz-octa-core-4-gb-lpddr4-64-gb-emmc-jioos-expandable-256-gb-29-46-cm-11-6-inch-digital-o491894913-p609664147-0-202408281600.webp"
//         ],
//         "brand": "JIO",
//         "price": 18999,
//         "oldPrice": 15999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [
//             "12GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bcab1b10adfb939f0449",
//                 "id": "6742bcab1b10adfb939f0449"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bcab1b10adfb939f044a",
//                 "id": "6742bcab1b10adfb939f044a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bcab1b10adfb939f044b",
//                 "id": "6742bcab1b10adfb939f044b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bcab1b10adfb939f044c",
//                 "id": "6742bcab1b10adfb939f044c"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:42:03.691Z",
//         "__v": 0,
//         "id": "6742bcab1b10adfb939f0448"
//     },
//     {
//         "_id": "6742bd5d1b10adfb939f05d4",
//         "name": "CHUWI Intel Core i5 10th Gen 1035G1 - (16 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732427090/1732427090543_chuwi-intel-core-i5-10th-gen-1035g1-16-gb-512-gb-ssd-windows-11-home-corebook-x-grey-laptop-product-images-orvkj8euljf-p607675928-0-202402012032.webp"
//         ],
//         "brand": "CHUWI",
//         "price": 24999,
//         "oldPrice": 25999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bd5d1b10adfb939f05d5",
//                 "id": "6742bd5d1b10adfb939f05d5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bd5d1b10adfb939f05d6",
//                 "id": "6742bd5d1b10adfb939f05d6"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bd5d1b10adfb939f05d7",
//                 "id": "6742bd5d1b10adfb939f05d7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bd5d1b10adfb939f05d8",
//                 "id": "6742bd5d1b10adfb939f05d8"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:45:01.818Z",
//         "__v": 0,
//         "id": "6742bd5d1b10adfb939f05d4"
//     },
//     {
//         "_id": "6742be4b1b10adfb939f09c5",
//         "name": "Oppo K12x 5G 128 GB, 6 GB RAM, Breeze Blue, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732427321/1732427321326_oppo-k12x-5g-128-gb-6-gb-ram-midnight-navy-mobile-phone-digital-o494422233-p609630871-0-202407311923.jpg"
//         ],
//         "brand": "OPPO",
//         "price": 14999,
//         "oldPrice": 15888,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742be4b1b10adfb939f09c6",
//                 "id": "6742be4b1b10adfb939f09c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742be4b1b10adfb939f09c7",
//                 "id": "6742be4b1b10adfb939f09c7"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742be4b1b10adfb939f09c8",
//                 "id": "6742be4b1b10adfb939f09c8"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742be4b1b10adfb939f09c9",
//                 "id": "6742be4b1b10adfb939f09c9"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:48:59.859Z",
//         "__v": 0,
//         "id": "6742be4b1b10adfb939f09c5"
//     },
//     {
//         "_id": "6742bf121b10adfb939f0b5d",
//         "name": "Realme Narzo N65 5G 128 GB, 4 GB RAM, Amber Gold, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732428445/1732428444304_realme-narzo-n65-5g-128-gb-4-gb-ram-amber-gold-mobile-phone-digital-o494422937-p609971944-0-202409161631.webp",
//             "https://res.cloudinary.com/dkgonwhvj/image/upload/v1732428445/1732428444625_realme-narzo-n65-5g-128-gb-4-gb-ram-amber-gold-mobile-phone-digital-o494422937-p609971944-3-202409161631.webp"
//         ],
//         "brand": "Realme",
//         "price": 12499,
//         "oldPrice": 11999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bf121b10adfb939f0b5e",
//                 "id": "6742bf121b10adfb939f0b5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bf121b10adfb939f0b5f",
//                 "id": "6742bf121b10adfb939f0b5f"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bf121b10adfb939f0b60",
//                 "id": "6742bf121b10adfb939f0b60"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bf121b10adfb939f0b61",
//                 "id": "6742bf121b10adfb939f0b61"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:52:18.977Z",
//         "__v": 0,
//         "id": "6742bf121b10adfb939f0b5d"
//     }
// ]

// let products_noImage = [
//     {
//         "_id": "66cf364a7f21a4cf0943b087",
//         "name": "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirts",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".jpg",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "GESPO",
//         "price": 399,
//         "oldPrice": 499,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 2,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61073f4ee2e36a03e90b",
//                 "id": "670a61073f4ee2e36a03e90b"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61073f4ee2e36a03e90c",
//                 "id": "670a61073f4ee2e36a03e90c"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61073f4ee2e36a03e90d",
//                 "id": "670a61073f4ee2e36a03e90d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61073f4ee2e36a03e90e",
//                 "id": "670a61073f4ee2e36a03e90e"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61073f4ee2e36a03e90f",
//                 "id": "670a61073f4ee2e36a03e90f"
//             },
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b50b561347e5c638f8eba",
//                 "id": "670b50b561347e5c638f8eba"
//             }
//         ],
//         "dateCreated": "2024-08-28T14:38:02.893Z",
//         "__v": 0,
//         "id": "66cf364a7f21a4cf0943b087"
//     },
//     {
//         "_id": "66d1df5c88319dc216a20017",
//         "name": "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)",
//         "description": "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "VNEED",
//         "price": 50000,
//         "oldPrice": 655,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "m",
//             "XXL",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61243f4ee2e36a03e971",
//                 "id": "670a61243f4ee2e36a03e971"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61243f4ee2e36a03e972",
//                 "id": "670a61243f4ee2e36a03e972"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61243f4ee2e36a03e973",
//                 "id": "670a61243f4ee2e36a03e973"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61243f4ee2e36a03e974",
//                 "id": "670a61243f4ee2e36a03e974"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61243f4ee2e36a03e975",
//                 "id": "670a61243f4ee2e36a03e975"
//             },
//             {
//                 "value": "LK",
//                 "label": "Sri Lanka",
//                 "_id": "670a61243f4ee2e36a03e976",
//                 "id": "670a61243f4ee2e36a03e976"
//             }
//         ],
//         "dateCreated": "2024-08-30T15:03:56.294Z",
//         "__v": 0,
//         "updatedAt": "2024-09-09T03:54:32.426Z",
//         "id": "66d1df5c88319dc216a20017"
//     },
//     {
//         "_id": "66d44646aa5c959c5b9fa1c6",
//         "name": "Altecia The Perfect Pair Women Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Altecia",
//         "price": 650,
//         "oldPrice": 780111,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61413f4ee2e36a03e9a9",
//                 "id": "670a61413f4ee2e36a03e9a9"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61413f4ee2e36a03e9aa",
//                 "id": "670a61413f4ee2e36a03e9aa"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "670a61413f4ee2e36a03e9ab",
//                 "id": "670a61413f4ee2e36a03e9ab"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61413f4ee2e36a03e9ac",
//                 "id": "670a61413f4ee2e36a03e9ac"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61413f4ee2e36a03e9ad",
//                 "id": "670a61413f4ee2e36a03e9ad"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "670a61413f4ee2e36a03e9ae",
//                 "id": "670a61413f4ee2e36a03e9ae"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61413f4ee2e36a03e9af",
//                 "id": "670a61413f4ee2e36a03e9af"
//             }
//         ],
//         "dateCreated": "2024-09-01T10:47:34.389Z",
//         "__v": 0,
//         "id": "66d44646aa5c959c5b9fa1c6"
//     },
//     {
//         "_id": "66d491377d46e49d1b58de97",
//         "name": "Kondom",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "CLOSWIF",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61593f4ee2e36a03e9d9",
//                 "id": "670a61593f4ee2e36a03e9d9"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61593f4ee2e36a03e9da",
//                 "id": "670a61593f4ee2e36a03e9da"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61593f4ee2e36a03e9db",
//                 "id": "670a61593f4ee2e36a03e9db"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61593f4ee2e36a03e9dc",
//                 "id": "670a61593f4ee2e36a03e9dc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61593f4ee2e36a03e9dd",
//                 "id": "670a61593f4ee2e36a03e9dd"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61593f4ee2e36a03e9de",
//                 "id": "670a61593f4ee2e36a03e9de"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:07:19.145Z",
//         "__v": 0,
//         "id": "66d491377d46e49d1b58de97"
//     },
//     {
//         "_id": "66d492927d46e49d1b58df07",
//         "name": "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp",
//             ".webp",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Tazo",
//         "price": 450,
//         "oldPrice": 1000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Men",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61623f4ee2e36a03ea0c",
//                 "id": "670a61623f4ee2e36a03ea0c"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd4011f039258ce560546",
//                 "id": "670cd4011f039258ce560546"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd4011f039258ce560547",
//                 "id": "670cd4011f039258ce560547"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd4011f039258ce560548",
//                 "id": "670cd4011f039258ce560548"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:13:06.752Z",
//         "__v": 0,
//         "id": "66d492927d46e49d1b58df07"
//     },
//     {
//         "_id": "66d595bf247824aacf08cb8a",
//         "name": "Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt for Women low price up to off new arrival most loved collection trending tops fancy top printed top printed trouser casual wear party wear daily wear night wear top bottom set-1Pair(size -XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Altecia",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 600,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XXL"
//         ],
//         "productWeight": [
//             "1KG",
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61683f4ee2e36a03ea35",
//                 "id": "670a61683f4ee2e36a03ea35"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd3bd1f039258ce560496",
//                 "id": "670cd3bd1f039258ce560496"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd3bd1f039258ce560497",
//                 "id": "670cd3bd1f039258ce560497"
//             }
//         ],
//         "dateCreated": "2024-09-02T10:38:55.907Z",
//         "__v": 0,
//         "id": "66d595bf247824aacf08cb8a"
//     },
//     {
//         "_id": "66df0156d9c220020e25a2a6",
//         "name": "Siril Georgette Pink Color Saree with Blouse piece",
//         "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
//         "images": [
//             ".webp",
//             ".webp",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "SIRIL",
//         "price": 500,
//         "oldPrice": 650,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a616d3f4ee2e36a03ea5e",
//                 "id": "670a616d3f4ee2e36a03ea5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0831a0c5f1ae830f794",
//                 "id": "670aa0831a0c5f1ae830f794"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0831a0c5f1ae830f795",
//                 "id": "670aa0831a0c5f1ae830f795"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0831a0c5f1ae830f796",
//                 "id": "670aa0831a0c5f1ae830f796"
//             }
//         ],
//         "dateCreated": "2024-09-09T14:08:22.354Z",
//         "__v": 0,
//         "id": "66df0156d9c220020e25a2a6"
//     },
//     {
//         "_id": "66e1327804413e6a409f9689",
//         "name": "Aashirvaad Superior Whole Wheat MP Atta 1000kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "AASHIRVAAD",
//         "price": 2,
//         "oldPrice": 270,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a617c3f4ee2e36a03eab0",
//                 "id": "670a617c3f4ee2e36a03eab0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ed4fa94c7ca12096598",
//                 "id": "670a7ed4fa94c7ca12096598"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:02:32.029Z",
//         "__v": 0,
//         "id": "66e1327804413e6a409f9689"
//     },
//     {
//         "_id": "66e132f304413e6a409f96bd",
//         "name": "Good Life MP Wheat Chakkki Atta 1 kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Good Life",
//         "price": 250,
//         "oldPrice": 330,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61813f4ee2e36a03ead9",
//                 "id": "670a61813f4ee2e36a03ead9"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:04:35.741Z",
//         "__v": 0,
//         "id": "66e132f304413e6a409f96bd"
//     },
//     {
//         "_id": "66e139b767c833713b24751e",
//         "name": "HP 15s-fr5012TU Standard Laptop (Intel Core i3-1215U/8 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home/MSO/FHD), 39.6cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "HP",
//         "price": 35000,
//         "oldPrice": 42000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 15,
//         "productRam": [
//             "8GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61d63f4ee2e36a03eca7",
//                 "id": "670a61d63f4ee2e36a03eca7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa09a1a0c5f1ae830f80c",
//                 "id": "670aa09a1a0c5f1ae830f80c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa09a1a0c5f1ae830f80d",
//                 "id": "670aa09a1a0c5f1ae830f80d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa09a1a0c5f1ae830f80e",
//                 "id": "670aa09a1a0c5f1ae830f80e"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:33:27.831Z",
//         "__v": 0,
//         "id": "66e139b767c833713b24751e"
//     },
//     {
//         "_id": "66e13a3b67c833713b24759f",
//         "name": "Fortune Sunlite Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Fortune",
//         "price": 150,
//         "oldPrice": 170,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61dc3f4ee2e36a03ecd0",
//                 "id": "670a61dc3f4ee2e36a03ecd0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f59fa94c7ca12096796",
//                 "id": "670a7f59fa94c7ca12096796"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:35:39.653Z",
//         "__v": 0,
//         "id": "66e13a3b67c833713b24759f"
//     },
//     {
//         "_id": "66e13a9e67c833713b2475d9",
//         "name": "Good Life Kachi Ghani Mustard Oil 1 L (Pouch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 4500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61f43f4ee2e36a03ed0e",
//                 "id": "670a61f43f4ee2e36a03ed0e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e79fa94c7ca12096432",
//                 "id": "670a7e79fa94c7ca12096432"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:37:18.172Z",
//         "__v": 0,
//         "id": "66e13a9e67c833713b2475d9"
//     },
//     {
//         "_id": "66e13bcc67c833713b24763a",
//         "name": "ZAALIQA Girls Black Handbag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "ZAALIQA",
//         "price": 620,
//         "oldPrice": 750,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61fb3f4ee2e36a03ed3f",
//                 "id": "670a61fb3f4ee2e36a03ed3f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd6801f039258ce561017",
//                 "id": "670cd6801f039258ce561017"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:42:20.690Z",
//         "__v": 0,
//         "id": "66e13bcc67c833713b24763a"
//     },
//     {
//         "_id": "66e13c6867c833713b24768b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Grey Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "KSC",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62033f4ee2e36a03ed70",
//                 "id": "670a62033f4ee2e36a03ed70"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b45885efc6a71f2adc4fe",
//                 "id": "670b45885efc6a71f2adc4fe"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:44:56.302Z",
//         "__v": 0,
//         "id": "66e13c6867c833713b24768b"
//     },
//     {
//         "_id": "66e13d6267c833713b24772b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Red Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".webp"
//         ],
//         "brand": "KSC ",
//         "price": 750,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62133f4ee2e36a03edd2",
//                 "id": "670a62133f4ee2e36a03edd2"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f34fa94c7ca1209674c",
//                 "id": "670a7f34fa94c7ca1209674c"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:49:06.885Z",
//         "__v": 0,
//         "id": "66e13d6267c833713b24772b"
//     },
//     {
//         "_id": "66e13dee67c833713b247765",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "LIVE FAShion",
//         "price": 650,
//         "oldPrice": 850,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a621b3f4ee2e36a03ee03",
//                 "id": "670a621b3f4ee2e36a03ee03"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8bd1f039258ce5616a8",
//                 "id": "670cd8bd1f039258ce5616a8"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:51:26.242Z",
//         "__v": 0,
//         "id": "66e13dee67c833713b247765"
//     },
//     {
//         "_id": "66e14052d7b24f428474f35a",
//         "name": "POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "POCO",
//         "price": 13000,
//         "oldPrice": 15000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62223f4ee2e36a03ee34",
//                 "id": "670a62223f4ee2e36a03ee34"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd88b1f039258ce5615e2",
//                 "id": "670cd88b1f039258ce5615e2"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd88b1f039258ce5615e3",
//                 "id": "670cd88b1f039258ce5615e3"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:01:38.292Z",
//         "__v": 0,
//         "id": "66e14052d7b24f428474f35a"
//     },
//     {
//         "_id": "66e140e4d7b24f428474f419",
//         "name": "Aqualite Black & Grey Slip-Resistance Sliders for Men",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 850,
//         "oldPrice": 920,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "673089cf45d0a9534fb3bed5",
//         "subCat": "Men Footwear",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a622a3f4ee2e36a03ee65",
//                 "id": "670a622a3f4ee2e36a03ee65"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8501f039258ce561516",
//                 "id": "670cd8501f039258ce561516"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8501f039258ce561517",
//                 "id": "670cd8501f039258ce561517"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8501f039258ce561518",
//                 "id": "670cd8501f039258ce561518"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8501f039258ce561519",
//                 "id": "670cd8501f039258ce561519"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670cd8501f039258ce56151a",
//                 "id": "670cd8501f039258ce56151a"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:04:04.916Z",
//         "__v": 0,
//         "id": "66e140e4d7b24f428474f419"
//     },
//     {
//         "_id": "66e14d36d7b24f428474f81e",
//         "name": "Fabbmate Casual Sports shoes White Sneakers for Women Girls White Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Fabbmate",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62343f4ee2e36a03ee96",
//                 "id": "670a62343f4ee2e36a03ee96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8201f039258ce561454",
//                 "id": "670cd8201f039258ce561454"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8201f039258ce561455",
//                 "id": "670cd8201f039258ce561455"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8201f039258ce561456",
//                 "id": "670cd8201f039258ce561456"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8201f039258ce561457",
//                 "id": "670cd8201f039258ce561457"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:56:38.417Z",
//         "__v": 0,
//         "id": "66e14d36d7b24f428474f81e"
//     },
//     {
//         "_id": "66e15fbacbb9035ac19bca85",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Paragon",
//         "price": 320,
//         "oldPrice": 450,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a623c3f4ee2e36a03eec7",
//                 "id": "670a623c3f4ee2e36a03eec7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a623c3f4ee2e36a03eec8",
//                 "id": "670a623c3f4ee2e36a03eec8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7b31f039258ce5612f2",
//                 "id": "670cd7b31f039258ce5612f2"
//             }
//         ],
//         "dateCreated": "2024-09-11T09:15:38.977Z",
//         "__v": 0,
//         "id": "66e15fbacbb9035ac19bca85"
//     },
//     {
//         "_id": "66e16de3cbb9035ac19bccf6",
//         "name": "Aqualite Women Pista Green Casual Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62773f4ee2e36a03ef41",
//                 "id": "670a62773f4ee2e36a03ef41"
//             },
//             {
//                 "value": "ID",
//                 "label": "Indonesia",
//                 "_id": "670cd7631f039258ce561233",
//                 "id": "670cd7631f039258ce561233"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7631f039258ce561234",
//                 "id": "670cd7631f039258ce561234"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:16:03.095Z",
//         "__v": 0,
//         "id": "66e16de3cbb9035ac19bccf6"
//     },
//     {
//         "_id": "66e16ee8cbb9035ac19bcd16",
//         "name": "Paragon Women's Trendy Wedge Heel Sandals with Cushioned Sole and Sturdy Construction for Everyday Use",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Paragon",
//         "price": 450,
//         "oldPrice": 650,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a627c3f4ee2e36a03ef72",
//                 "id": "670a627c3f4ee2e36a03ef72"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd71c1f039258ce56117e",
//                 "id": "670cd71c1f039258ce56117e"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:20:24.524Z",
//         "__v": 0,
//         "id": "66e16ee8cbb9035ac19bcd16"
//     },
//     {
//         "_id": "66e17196cbb9035ac19bce4d",
//         "name": "FLORES Stylish Fashion Backpack For Girls and boys",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "FLORES",
//         "price": 560,
//         "oldPrice": 590,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62843f4ee2e36a03efab",
//                 "id": "670a62843f4ee2e36a03efab"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:31:50.421Z",
//         "__v": 0,
//         "id": "66e17196cbb9035ac19bce4d"
//     },
//     {
//         "_id": "66e17237cbb9035ac19bced8",
//         "name": "Fytona Medium Laptop Backpack | Light weight For School Collage Office Tuition and Picnic | Waterproof Backpack (Grey, 25 L)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Fytona",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfab3490222862ae78c7",
//         "subCat": "Boys",
//         "subCatName": "Boys",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a628c3f4ee2e36a03efec",
//                 "id": "670a628c3f4ee2e36a03efec"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb771f039258ce5620dd",
//                 "id": "670cdb771f039258ce5620dd"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:34:31.443Z",
//         "__v": 0,
//         "id": "66e17237cbb9035ac19bced8"
//     },
//     {
//         "_id": "66e293e22c48007bafc155ab",
//         "name": "DANGAR ENTERPRISE Kundan white Earring for Women and Girls-Terndy Women Pooja And Diwali Special Attractive Earrings Set For Party Occasion-Kundan work studs-Triangle Shape Kundan Stud Earring-1 Pair",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "DANGAR ENTERPRISE",
//         "price": 280,
//         "oldPrice": 320,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 140,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62913f4ee2e36a03f01d",
//                 "id": "670a62913f4ee2e36a03f01d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdb101f039258ce561f46",
//                 "id": "670cdb101f039258ce561f46"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb101f039258ce561f47",
//                 "id": "670cdb101f039258ce561f47"
//             }
//         ],
//         "dateCreated": "2024-09-12T07:10:26.046Z",
//         "__v": 0,
//         "id": "66e293e22c48007bafc155ab"
//     },
//     {
//         "_id": "66e50d28ea40d089af7d6bed",
//         "name": "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women | Ethnic Kurta Set for Women (set of 1) (5XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "VNEED",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62963f4ee2e36a03f06e",
//                 "id": "670a62963f4ee2e36a03f06e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdae21f039258ce561e76",
//                 "id": "670cdae21f039258ce561e76"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdae21f039258ce561e77",
//                 "id": "670cdae21f039258ce561e77"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:12:24.553Z",
//         "__v": 0,
//         "id": "66e50d28ea40d089af7d6bed"
//     },
//     {
//         "_id": "66e50df7ea40d089af7d6c1d",
//         "name": "Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".webp"
//         ],
//         "brand": "Tecno",
//         "price": 12300,
//         "oldPrice": 13500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a629b3f4ee2e36a03f0a7",
//                 "id": "670a629b3f4ee2e36a03f0a7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda971f039258ce561da8",
//                 "id": "670cda971f039258ce561da8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:15:51.476Z",
//         "__v": 0,
//         "id": "66e50df7ea40d089af7d6c1d"
//     },
//     {
//         "_id": "66e50fbfea40d089af7d6c48",
//         "name": "Apple iPhone 13 128 GB, Pink",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Apple",
//         "price": 39600,
//         "oldPrice": 389000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 14,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62a13f4ee2e36a03f0d8",
//                 "id": "670a62a13f4ee2e36a03f0d8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda6b1f039258ce561cdc",
//                 "id": "670cda6b1f039258ce561cdc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cda6b1f039258ce561cdd",
//                 "id": "670cda6b1f039258ce561cdd"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:23:27.825Z",
//         "__v": 0,
//         "id": "66e50fbfea40d089af7d6c48"
//     },
//     {
//         "_id": "66e510aeea40d089af7d6c7a",
//         "name": "Aqualite's Trendy and Stylish Orange Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b13f4ee2e36a03f101",
//                 "id": "670a62b13f4ee2e36a03f101"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ee3fa94c7ca120965d8",
//                 "id": "670a7ee3fa94c7ca120965d8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:27:26.448Z",
//         "__v": 0,
//         "id": "66e510aeea40d089af7d6c7a"
//     },
//     {
//         "_id": "66e51372ea40d089af7d6d77",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Paragon",
//         "price": 650,
//         "oldPrice": 690,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 13,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b63f4ee2e36a03f12a",
//                 "id": "670a62b63f4ee2e36a03f12a"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd9e71f039258ce561b48",
//                 "id": "670cd9e71f039258ce561b48"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9e71f039258ce561b49",
//                 "id": "670cd9e71f039258ce561b49"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:39:14.497Z",
//         "__v": 0,
//         "id": "66e51372ea40d089af7d6d77"
//     },
//     {
//         "_id": "66e5182cea40d089af7d6e4d",
//         "name": "Aqualite's Trendy and Stylish Pista Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Denill",
//         "price": 260,
//         "oldPrice": 320,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "66c0e00a3490222862ae78f1",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 165,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bb3f4ee2e36a03f153",
//                 "id": "670a62bb3f4ee2e36a03f153"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:59:24.006Z",
//         "__v": 0,
//         "id": "66e5182cea40d089af7d6e4d"
//     },
//     {
//         "_id": "66e52b5be2e06fb4c9259dd2",
//         "name": "Good Life Refined Rice Bran Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 230,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bf3f4ee2e36a03f17c",
//                 "id": "670a62bf3f4ee2e36a03f17c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9791f039258ce5619be",
//                 "id": "670cd9791f039258ce5619be"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:21:15.971Z",
//         "__v": 0,
//         "id": "66e52b5be2e06fb4c9259dd2"
//     },
//     {
//         "_id": "66e52bc5e2e06fb4c9259e04",
//         "name": "Gemini Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Gemini",
//         "price": 180,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1700,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62c53f4ee2e36a03f1a5",
//                 "id": "670a62c53f4ee2e36a03f1a5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fc9fa94c7ca120969ee",
//                 "id": "670a7fc9fa94c7ca120969ee"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:23:01.356Z",
//         "__v": 0,
//         "id": "66e52bc5e2e06fb4c9259e04"
//     },
//     {
//         "_id": "66e52c1ce2e06fb4c9259e1e",
//         "name": "Saffola Gold Pro Healthy Lifestyle RiceBran Based Blended Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Saffola",
//         "price": 150,
//         "oldPrice": 180,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ca3f4ee2e36a03f1ce",
//                 "id": "670a62ca3f4ee2e36a03f1ce"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fb7fa94c7ca120968cb",
//                 "id": "670a7fb7fa94c7ca120968cb"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:24:28.887Z",
//         "__v": 0,
//         "id": "66e52c1ce2e06fb4c9259e1e"
//     },
//     {
//         "_id": "66e52d1ce2e06fb4c9259e9e",
//         "name": "Surf Excel Matic Front Load Liquid Detergent 2 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Surf Excel",
//         "price": 356,
//         "oldPrice": 380,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dff73490222862ae78e5",
//         "subCat": "Home Care",
//         "subCatName": "Home Care",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d33f4ee2e36a03f220",
//                 "id": "670a62d33f4ee2e36a03f220"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e9afa94c7ca120964b1",
//                 "id": "670a7e9afa94c7ca120964b1"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:28:44.902Z",
//         "__v": 0,
//         "id": "66e52d1ce2e06fb4c9259e9e"
//     },
//     {
//         "_id": "66e6839f49fb19355a7a0630",
//         "name": "Muuchstac Ocean Face Wash for Men, Fights Acne & Pimple, Skin Whitening & Brightening, All Skin Types, 100 Ml Each (Pack Of 2)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Muuchstac",
//         "price": 178,
//         "oldPrice": 190,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d83f4ee2e36a03f249",
//                 "id": "670a62d83f4ee2e36a03f249"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc711f039258ce5626a1",
//                 "id": "670cdc711f039258ce5626a1"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:50:07.386Z",
//         "__v": 0,
//         "id": "66e6839f49fb19355a7a0630"
//     },
//     {
//         "_id": "66e6841249fb19355a7a064e",
//         "name": "Vaseline Original Care Lip Therapy 17 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Vaseline",
//         "price": 145,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e13f4ee2e36a03f272",
//                 "id": "670a62e13f4ee2e36a03f272"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e8afa94c7ca12096471",
//                 "id": "670a7e8afa94c7ca12096471"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:52:02.859Z",
//         "__v": 0,
//         "id": "66e6841249fb19355a7a064e"
//     },
//     {
//         "_id": "66e684ad49fb19355a7a06d9",
//         "name": "WOW Skin Science Rose Water for Face | Made with Pure Kannauj Rose Extracts | Use It As Toner, Skin Hyderator & Makeup Primer | 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 150,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 140,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e53f4ee2e36a03f29b",
//                 "id": "670a62e53f4ee2e36a03f29b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7eaefa94c7ca120964f2",
//                 "id": "670a7eaefa94c7ca120964f2"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:54:37.303Z",
//         "__v": 0,
//         "id": "66e684ad49fb19355a7a06d9"
//     },
//     {
//         "_id": "66e685cf49fb19355a7a0a5f",
//         "name": "Nisha Creme Hair Color - 3.5 Chocolate Brown 60 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Nisha",
//         "price": 160,
//         "oldPrice": 170,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ea3f4ee2e36a03f2c4",
//                 "id": "670a62ea3f4ee2e36a03f2c4"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc0f1f039258ce562421",
//                 "id": "670cdc0f1f039258ce562421"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:59:27.733Z",
//         "__v": 0,
//         "id": "66e685cf49fb19355a7a0a5f"
//     },
//     {
//         "_id": "66e6864549fb19355a7a0a9a",
//         "name": "Navratna Ayurvedic Cool Oil 200 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Navratna",
//         "price": 10,
//         "oldPrice": 145,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62fb3f4ee2e36a03f325",
//                 "id": "670a62fb3f4ee2e36a03f325"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbe51f039258ce56234e",
//                 "id": "670cdbe51f039258ce56234e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:01:25.456Z",
//         "__v": 0,
//         "id": "66e6864549fb19355a7a0a9a"
//     },
//     {
//         "_id": "66e6875c49fb19355a7a0b73",
//         "name": "The Gianna Ring",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Promise Collection",
//         "price": 650,
//         "oldPrice": 780,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63033f4ee2e36a03f366",
//                 "id": "670a63033f4ee2e36a03f366"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbc11f039258ce56227a",
//                 "id": "670cdbc11f039258ce56227a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdbc11f039258ce56227b",
//                 "id": "670cdbc11f039258ce56227b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:06:04.316Z",
//         "__v": 0,
//         "id": "66e6875c49fb19355a7a0b73"
//     },
//     {
//         "_id": "66e688ed49fb19355a7a0bb7",
//         "name": "NEW GOLDEN LONG JHUMKI EARRING",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "JSV CAHIRA",
//         "price": 350,
//         "oldPrice": 430,
//         "catName": "Jewellery",
//         "catId": "670f54e8e86c762e3cad6cd1",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": null,
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63093f4ee2e36a03f38f",
//                 "id": "670a63093f4ee2e36a03f38f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0911f039258ce563288",
//                 "id": "670ce0911f039258ce563288"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:12:45.320Z",
//         "__v": 0,
//         "id": "66e688ed49fb19355a7a0bb7"
//     },
//     {
//         "_id": "66e6899b49fb19355a7a0bef",
//         "name": "VIBRANCE Jewellery Earrings for Women Oxidised Silver Jhumka earrings for Girls and Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "VIBRANCE",
//         "price": 340,
//         "oldPrice": 370,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 12,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a630e3f4ee2e36a03f3b8",
//                 "id": "670a630e3f4ee2e36a03f3b8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce05f1f039258ce5631ab",
//                 "id": "670ce05f1f039258ce5631ab"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:15:39.101Z",
//         "__v": 0,
//         "id": "66e6899b49fb19355a7a0bef"
//     },
//     {
//         "_id": "66e68a4549fb19355a7a0c1b",
//         "name": "SIRIMIRI SMER-1011 German Silver Drops & Danglers",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "SIRIMIRI",
//         "price": 260,
//         "oldPrice": 290,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63133f4ee2e36a03f3e1",
//                 "id": "670a63133f4ee2e36a03f3e1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0161f039258ce5630cf",
//                 "id": "670ce0161f039258ce5630cf"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:18:29.173Z",
//         "__v": 0,
//         "id": "66e68a4549fb19355a7a0c1b"
//     },
//     {
//         "_id": "66e68b1049fb19355a7a0c4e",
//         "name": "Zandu Chyavanprashad With No Added Sugar 900 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Zandu",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63173f4ee2e36a03f40a",
//                 "id": "670a63173f4ee2e36a03f40a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fe6fa94c7ca12096a98",
//                 "id": "670a7fe6fa94c7ca12096a98"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:21:52.774Z",
//         "__v": 0,
//         "id": "66e68b1049fb19355a7a0c4e"
//     },
//     {
//         "_id": "66e68c51e51aa3db51455710",
//         "name": "Conbre MultipleXR2 Pro {Upgraded} HD Smart WiFi Wireless IP CCTV Security Camera | Night Vision | 2-Way Audio | Support 64 GB Micro SD Card Slot",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Conbre",
//         "price": 1450,
//         "oldPrice": 1760,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a631b3f4ee2e36a03f433",
//                 "id": "670a631b3f4ee2e36a03f433"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf9a1f039258ce562f0e",
//                 "id": "670cdf9a1f039258ce562f0e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:27:13.034Z",
//         "__v": 0,
//         "id": "66e68c51e51aa3db51455710"
//     },
//     {
//         "_id": "66e68d24e51aa3db51455749",
//         "name": "Sony Alpha ILCE-7M3 Full-Frame 24.2MP Mirrorless Digital SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD, Low Light Camera), Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Sony",
//         "price": 45000,
//         "oldPrice": 90000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63213f4ee2e36a03f45c",
//                 "id": "670a63213f4ee2e36a03f45c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf6b1f039258ce562e34",
//                 "id": "670cdf6b1f039258ce562e34"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:30:44.015Z",
//         "__v": 0,
//         "id": "66e68d24e51aa3db51455749"
//     },
//     {
//         "_id": "66e68e27e51aa3db514558cd",
//         "name": "boAt Wave Fury Smartwatch with 4.64 cm (1.83 inch) HD Display, Advanced Bluetooth Calling, Functional Crown, 50+ Sports mode, IP67 Dust, Sweat & Splash Resistant (Active Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "boAt",
//         "price": 1800,
//         "oldPrice": 2100,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63343f4ee2e36a03f485",
//                 "id": "670a63343f4ee2e36a03f485"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf3a1f039258ce562d5b",
//                 "id": "670cdf3a1f039258ce562d5b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:35:03.008Z",
//         "__v": 0,
//         "id": "66e68e27e51aa3db514558cd"
//     },
//     {
//         "_id": "66e68ecae51aa3db5145595b",
//         "name": "Morden Smart Watch for Kids Men Women Boys Girls D116 Water Proof Touchscreen Smart Watch Bluetooth 1.44 HD Screen Smart Watch with Daily Activity Tracker, Heart Rate Sensor, Sleep Monitor - Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Morden",
//         "price": 2500,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1400,
//         "rating": 2,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63393f4ee2e36a03f4ae",
//                 "id": "670a63393f4ee2e36a03f4ae"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf0b1f039258ce562c83",
//                 "id": "670cdf0b1f039258ce562c83"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:37:46.263Z",
//         "__v": 0,
//         "id": "66e68ecae51aa3db5145595b"
//     },
//     {
//         "_id": "66e6ffb410ba0832baba6689",
//         "name": "Mars HD 2IN1 Nutration For Skin Foundation Golden Beige-F07",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63b03f4ee2e36a03f4fb",
//                 "id": "670a63b03f4ee2e36a03f4fb"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdecb1f039258ce562bac",
//                 "id": "670cdecb1f039258ce562bac"
//             }
//         ],
//         "dateCreated": "2024-09-15T15:39:32.052Z",
//         "__v": 0,
//         "id": "66e6ffb410ba0832baba6689"
//     },
//     {
//         "_id": "66e7fe39cd09356c5b465f45",
//         "name": "pink solid casual shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "V-Mart",
//         "price": 459,
//         "oldPrice": 495,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ca3f4ee2e36a03f52c",
//                 "id": "670a63ca3f4ee2e36a03f52c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cde281f039258ce562ad6",
//                 "id": "670cde281f039258ce562ad6"
//             }
//         ],
//         "dateCreated": "2024-09-16T09:45:29.901Z",
//         "__v": 0,
//         "id": "66e7fe39cd09356c5b465f45"
//     },
//     {
//         "_id": "66e8eafa3decb32ae2a77c6e",
//         "name": "Jobayed Hossain",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "V-Mart",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1800,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d13f4ee2e36a03f56f",
//                 "id": "670a63d13f4ee2e36a03f56f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0b31a0c5f1ae830f869",
//                 "id": "670aa0b31a0c5f1ae830f869"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0b31a0c5f1ae830f86a",
//                 "id": "670aa0b31a0c5f1ae830f86a"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:35:38.759Z",
//         "__v": 0,
//         "id": "66e8eafa3decb32ae2a77c6e"
//     },
//     {
//         "_id": "66e8ed483decb32ae2a77ca6",
//         "name": "beatXP Unbound Era 2.01\" Super AMOLED Display Bluetooth Calling Smart Watch, Metal Body, Rotary Crown, 410 * 502px, 1000 Nits, 60Hz Refresh Rate, 100+ Sports Modes (Black)",
//         "description": "Introducing the beatXP Unbound Era smartwatch - the latest in smartwatch technology. This device has an impressive 2.01-inch Super AMOLED Display with a 60Hz refresh rate and a peak brightness of 1000 Nits. It also features an Always On Display. The EzyPair Technology feature allows for seamless communication via Advanced Bluetooth calling, without requiring a phone.",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "beatXP",
//         "price": 1200,
//         "oldPrice": 1250,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d63f4ee2e36a03f5d0",
//                 "id": "670a63d63f4ee2e36a03f5d0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce3911f039258ce563a99",
//                 "id": "670ce3911f039258ce563a99"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:45:28.831Z",
//         "__v": 0,
//         "id": "66e8ed483decb32ae2a77ca6"
//     },
//     {
//         "_id": "66e8ee313decb32ae2a77cfc",
//         "name": "vHP 15-fb0082AX Victus Gaming Laptop(AMD Ryzen5-5600H /8GB/512GB SSD/4 GB Nvidia GeForce RTX 3050 Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "HP",
//         "price": 25000,
//         "oldPrice": 28000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [
//             "6GB",
//             "8GB",
//             "10GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63db3f4ee2e36a03f5f9",
//                 "id": "670a63db3f4ee2e36a03f5f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce35d1f039258ce5639b3",
//                 "id": "670ce35d1f039258ce5639b3"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:49:21.389Z",
//         "__v": 0,
//         "id": "66e8ee313decb32ae2a77cfc"
//     },
//     {
//         "_id": "66e8ef403decb32ae2a77db4",
//         "name": "Glowworld Women Blue Printed Cotton Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Glowworld",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e03f4ee2e36a03f622",
//                 "id": "670a63e03f4ee2e36a03f622"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2b11f039258ce5638ce",
//                 "id": "670ce2b11f039258ce5638ce"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:53:52.237Z",
//         "__v": 0,
//         "id": "66e8ef403decb32ae2a77db4"
//     },
//     {
//         "_id": "66e8f0793decb32ae2a77e65",
//         "name": "Siril Georgette Brown Color Saree with Blouse piece",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "SIRIL",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e43f4ee2e36a03f64b",
//                 "id": "670a63e43f4ee2e36a03f64b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2771f039258ce5637ea",
//                 "id": "670ce2771f039258ce5637ea"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:59:05.066Z",
//         "__v": 0,
//         "id": "66e8f0793decb32ae2a77e65"
//     },
//     {
//         "_id": "66ea3a08c017f4365fafc3e2",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "LIVE FASHION",
//         "price": 3500,
//         "oldPrice": 450,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e93f4ee2e36a03f674",
//                 "id": "670a63e93f4ee2e36a03f674"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0081a0c5f1ae830f573",
//                 "id": "670aa0081a0c5f1ae830f573"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0081a0c5f1ae830f574",
//                 "id": "670aa0081a0c5f1ae830f574"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0081a0c5f1ae830f575",
//                 "id": "670aa0081a0c5f1ae830f575"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:25:12.268Z",
//         "__v": 0,
//         "id": "66ea3a08c017f4365fafc3e2"
//     },
//     {
//         "_id": "66ea3ba5c017f4365fafc472",
//         "name": "beatXP Vega X 1.43\" Super AMOLED Display, One-Tap BT 5.2 Calling, Metal Body, 60Hz Refresh Rate, WIRELESS CHARGING, AI Voice Assistant Smartwatch (Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "beatXP",
//         "price": 1300,
//         "oldPrice": 1350,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ed3f4ee2e36a03f69d",
//                 "id": "670a63ed3f4ee2e36a03f69d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1d61f039258ce56361a",
//                 "id": "670ce1d61f039258ce56361a"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:32:05.013Z",
//         "__v": 0,
//         "id": "66ea3ba5c017f4365fafc472"
//     },
//     {
//         "_id": "66ea3f14c017f4365fafc692",
//         "name": "Apple iPhone 15 256GB Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             ".webp",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Apple",
//         "price": 32000,
//         "oldPrice": 33500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [
//             "8GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f23f4ee2e36a03f6c6",
//                 "id": "670a63f23f4ee2e36a03f6c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1aa1f039258ce563536",
//                 "id": "670ce1aa1f039258ce563536"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670ce1aa1f039258ce563537",
//                 "id": "670ce1aa1f039258ce563537"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:46:44.870Z",
//         "__v": 0,
//         "id": "66ea3f14c017f4365fafc692"
//     },
//     {
//         "_id": "670771e115f0a6583af1cbc1",
//         "name": "Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen, IPX5 Water Resistance, Heart Rate, SPO2, Upto 7 days battery, Berry Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "ALT",
//         "price": 2400,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f63f4ee2e36a03f6ef",
//                 "id": "670a63f63f4ee2e36a03f6ef"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a6f2b150631d6b104798d",
//                 "id": "670a6f2b150631d6b104798d"
//             },
//             {
//                 "value": "AD",
//                 "label": "Andorra",
//                 "_id": "670a6ff4150631d6b104811b",
//                 "id": "670a6ff4150631d6b104811b"
//             }
//         ],
//         "dateCreated": "2024-10-10T06:19:13.027Z",
//         "__v": 0,
//         "id": "670771e115f0a6583af1cbc1"
//     },
//     {
//         "_id": "670a5a647b760ed48b5b6fbe",
//         "name": "Buy New Trend Women Black Cotton Blend Top | top for women | women top | top for women | women top",
//         "description": "For girl's seeking a ethnic set that melds classic charm with a contemporary twist, Trilok Fab flared ethnic gown is a perfect choice. It is designed with both comfort and style in mind, this maxi length gown is made to feel luxurious against the skin. The flowing flares allow for ease of movement, ensuring you feel as good as you look throughout the entire event. Despite the occasion that you want to wear it for, this dress leaves a lasting impression of refined elegance wherever you go.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Trilok Fab",
//         "price": 1500,
//         "oldPrice": 2200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a5a647b760ed48b5b6fbf",
//                 "id": "670a5a647b760ed48b5b6fbf"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a5a647b760ed48b5b6fc0",
//                 "id": "670a5a647b760ed48b5b6fc0"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a5dd47b760ed48b5b7031",
//                 "id": "670a5dd47b760ed48b5b7031"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670ce0cb1f039258ce56336c",
//                 "id": "670ce0cb1f039258ce56336c"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670ce0cb1f039258ce56336d",
//                 "id": "670ce0cb1f039258ce56336d"
//             }
//         ],
//         "dateCreated": "2024-10-12T11:15:48.297Z",
//         "__v": 0,
//         "id": "670a5a647b760ed48b5b6fbe"
//     },
//     {
//         "_id": "670b4d0961347e5c638f893f",
//         "name": "women red round neck kurta pant set with dupatta",
//         "description": "Save your time mixing and matching various ethnic pieces and invest in beautiful kurta pant set ethnic sets from Ishin brands that give a well-fitted look in all styles.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Ishin",
//         "price": 1500,
//         "oldPrice": 1700,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b4d0961347e5c638f8940",
//                 "id": "670b4d0961347e5c638f8940"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b4d0961347e5c638f8941",
//                 "id": "670b4d0961347e5c638f8941"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670b4d0961347e5c638f8942",
//                 "id": "670b4d0961347e5c638f8942"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b4d0961347e5c638f8943",
//                 "id": "670b4d0961347e5c638f8943"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b4d0961347e5c638f8944",
//                 "id": "670b4d0961347e5c638f8944"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:31:05.278Z",
//         "__v": 0,
//         "id": "670b4d0961347e5c638f893f"
//     },
//     {
//         "_id": "670b52bc61347e5c638f912a",
//         "name": "men checkered long sleeve casual shirt",
//         "description": "Be a head turner by wearing this casual shirt from BUSHIRT and grab it in brown colour.\nShowcase this top in wonderful prints and wear it for different occasions.\nBuy this outstanding collection in a 47 size & get it in fabric made of cotton material.\nBored of the conventional shirt look? Well, these casual shirts in graceful neck designs and long sleeves will give you a whole new dimension!\nLook dapper in casual shirts priced at ₹1199 and benefit 60% .",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "BUSHIRT",
//         "price": 850,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b52bc61347e5c638f912b",
//                 "id": "670b52bc61347e5c638f912b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b52bc61347e5c638f912c",
//                 "id": "670b52bc61347e5c638f912c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b52bc61347e5c638f912d",
//                 "id": "670b52bc61347e5c638f912d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b52bc61347e5c638f912e",
//                 "id": "670b52bc61347e5c638f912e"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:55:24.244Z",
//         "__v": 0,
//         "id": "670b52bc61347e5c638f912a"
//     },
//     {
//         "_id": "670b88d7acc986ed5b012079",
//         "name": "Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set",
//         "description": "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions.",
//         "images": [
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "Deel band",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b88d7acc986ed5b01207a",
//                 "id": "670b88d7acc986ed5b01207a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b88d7acc986ed5b01207b",
//                 "id": "670b88d7acc986ed5b01207b"
//             },
//             {
//                 "value": "KE",
//                 "label": "Kenya",
//                 "_id": "670b88d7acc986ed5b01207c",
//                 "id": "670b88d7acc986ed5b01207c"
//             }
//         ],
//         "dateCreated": "2024-10-13T08:46:15.277Z",
//         "__v": 0,
//         "id": "670b88d7acc986ed5b012079"
//     },
//     {
//         "_id": "670bff5ddefdab066b32758b",
//         "name": "GESPO Peach Solid Mandarin Collar Half Sleeve Casual T-Shirt",
//         "description": "Rs: Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasio.\n\n",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".jpg",
//             ".webp"
//         ],
//         "brand": "GESPO",
//         "price": 1500,
//         "oldPrice": 2000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 9,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670bff5ddefdab066b32758c",
//                 "id": "670bff5ddefdab066b32758c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670bff5ddefdab066b32758d",
//                 "id": "670bff5ddefdab066b32758d"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670bff5ddefdab066b32758e",
//                 "id": "670bff5ddefdab066b32758e"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670bff5ddefdab066b32758f",
//                 "id": "670bff5ddefdab066b32758f"
//             },
//             {
//                 "value": "EC",
//                 "label": "Ecuador",
//                 "_id": "6716dcc3faf0ddf988e78dbc",
//                 "id": "6716dcc3faf0ddf988e78dbc"
//             }
//         ],
//         "dateCreated": "2024-10-13T17:11:57.651Z",
//         "__v": 0,
//         "id": "670bff5ddefdab066b32758b"
//     },
//     {
//         "_id": "6734647d6380d4e40d6484f8",
//         "name": "EYEBOGLER Teal Tshirts/Men tshirt/ tshirt for men/ tshirt/ mens tshirt/ Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".webp",
//             ".jpg"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 650,
//         "oldPrice": 950,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6734647d6380d4e40d6484f9",
//                 "id": "6734647d6380d4e40d6484f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6734647d6380d4e40d6484fa",
//                 "id": "6734647d6380d4e40d6484fa"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6734647d6380d4e40d6484fb",
//                 "id": "6734647d6380d4e40d6484fb"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "6734647d6380d4e40d6484fc",
//                 "id": "6734647d6380d4e40d6484fc"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "6734647d6380d4e40d6484fd",
//                 "id": "6734647d6380d4e40d6484fd"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "6734647d6380d4e40d6484fe",
//                 "id": "6734647d6380d4e40d6484fe"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:34:05.526Z",
//         "__v": 0,
//         "id": "6734647d6380d4e40d6484f8"
//     },
//     {
//         "_id": "673464ff6380d4e40d64858f",
//         "name": "EYEBOGLER Polo Tshirts for Men | T Shirt For Men | Men T Shirt | Men Tshirt | Tshirt for Men | T Shirts | Tshirts | Oversized Tshirt | Men Tshirt | Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt | Printed Tshirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".webp",
//             ".webp"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 785,
//         "oldPrice": 995,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673464ff6380d4e40d648590",
//                 "id": "673464ff6380d4e40d648590"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673464ff6380d4e40d648591",
//                 "id": "673464ff6380d4e40d648591"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "673464ff6380d4e40d648592",
//                 "id": "673464ff6380d4e40d648592"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673464ff6380d4e40d648593",
//                 "id": "673464ff6380d4e40d648593"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673464ff6380d4e40d648594",
//                 "id": "673464ff6380d4e40d648594"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "673464ff6380d4e40d648595",
//                 "id": "673464ff6380d4e40d648595"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "673464ff6380d4e40d648596",
//                 "id": "673464ff6380d4e40d648596"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:36:15.091Z",
//         "__v": 0,
//         "id": "673464ff6380d4e40d64858f"
//     },
//     {
//         "_id": "673467b76380d4e40d648762",
//         "name": "Men Layerr Regular Fit Spread Collar Cotton Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "RARE RABBIT",
//         "price": 950,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Casual Shirts",
//         "thirdsubCatName": "Casual Shirts",
//         "thirdsubCatId": "673439806380d4e40d647b3a",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673467b76380d4e40d648763",
//                 "id": "673467b76380d4e40d648763"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673467b76380d4e40d648764",
//                 "id": "673467b76380d4e40d648764"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673467b76380d4e40d648765",
//                 "id": "673467b76380d4e40d648765"
//             },
//             {
//                 "value": "NZ",
//                 "label": "New Zealand",
//                 "_id": "673467b76380d4e40d648766",
//                 "id": "673467b76380d4e40d648766"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673467b76380d4e40d648767",
//                 "id": "673467b76380d4e40d648767"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "673467b76380d4e40d648768",
//                 "id": "673467b76380d4e40d648768"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:47:51.822Z",
//         "__v": 0,
//         "id": "673467b76380d4e40d648762"
//     },
//     {
//         "_id": "67346a136380d4e40d648974",
//         "name": "Chikankari Woven Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".webp",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "House of Chikankari",
//         "price": 1200,
//         "oldPrice": 1350,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346a136380d4e40d648975",
//                 "id": "67346a136380d4e40d648975"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346a136380d4e40d648976",
//                 "id": "67346a136380d4e40d648976"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67346a136380d4e40d648977",
//                 "id": "67346a136380d4e40d648977"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "67346a136380d4e40d648978",
//                 "id": "67346a136380d4e40d648978"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:57:55.488Z",
//         "__v": 0,
//         "id": "67346a136380d4e40d648974"
//     },
//     {
//         "_id": "67346b3c6380d4e40d648b1f",
//         "name": "A-Line Kurti With Sharara & Dupatta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             ".jpg",
//             ".jpg",
//             ".jpg",
//             ".jpg"
//         ],
//         "brand": "Sangria",
//         "price": 1300,
//         "oldPrice": 1450,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 250,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346b3c6380d4e40d648b20",
//                 "id": "67346b3c6380d4e40d648b20"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67346b3c6380d4e40d648b21",
//                 "id": "67346b3c6380d4e40d648b21"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346b3c6380d4e40d648b22",
//                 "id": "67346b3c6380d4e40d648b22"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "67346b3c6380d4e40d648b23",
//                 "id": "67346b3c6380d4e40d648b23"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "67346b3c6380d4e40d648b24",
//                 "id": "67346b3c6380d4e40d648b24"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "67346b3c6380d4e40d648b25",
//                 "id": "67346b3c6380d4e40d648b25"
//             }
//         ],
//         "dateCreated": "2024-11-13T09:02:52.829Z",
//         "__v": 0,
//         "id": "67346b3c6380d4e40d648b1f"
//     },
//     {
//         "_id": "6741677912b4da68b1670fd0",
//         "name": "Pro360 MOM Pro Nutritional Powder - Swiss Chocolate 200 g",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Pro360",
//         "price": 445,
//         "oldPrice": 345,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 34,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741677912b4da68b1670fd1",
//                 "id": "6741677912b4da68b1670fd1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741677912b4da68b1670fd2",
//                 "id": "6741677912b4da68b1670fd2"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741677912b4da68b1670fd3",
//                 "id": "6741677912b4da68b1670fd3"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:26:17.758Z",
//         "__v": 0,
//         "id": "6741677912b4da68b1670fd0"
//     },
//     {
//         "_id": "6741686e12b4da68b167150c",
//         "name": "Good Home Air Freshener - Lavender 50 gm",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Good Home",
//         "price": 78,
//         "oldPrice": 99,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 20,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741686e12b4da68b167150d",
//                 "id": "6741686e12b4da68b167150d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741686e12b4da68b167150e",
//                 "id": "6741686e12b4da68b167150e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741686e12b4da68b167150f",
//                 "id": "6741686e12b4da68b167150f"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741686e12b4da68b1671510",
//                 "id": "6741686e12b4da68b1671510"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:30:22.064Z",
//         "__v": 0,
//         "id": "6741686e12b4da68b167150c"
//     },
//     {
//         "_id": "6741697812b4da68b1671728",
//         "name": "Protinex Powder - Rich Chocolate Flavour (Jar) 400 gm",
//         "description": "Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Protinex",
//         "price": 549,
//         "oldPrice": 649,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741697812b4da68b1671729",
//                 "id": "6741697812b4da68b1671729"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741697812b4da68b167172a",
//                 "id": "6741697812b4da68b167172a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741697812b4da68b167172b",
//                 "id": "6741697812b4da68b167172b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741697812b4da68b167172c",
//                 "id": "6741697812b4da68b167172c"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:34:48.245Z",
//         "__v": 0,
//         "id": "6741697812b4da68b1671728"
//     },
//     {
//         "_id": "67416aa212b4da68b1671ac2",
//         "name": "SEBAMED CLEANSING BAR 100gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Sebamed",
//         "price": 270,
//         "oldPrice": 310,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67416aa212b4da68b1671ac3",
//                 "id": "67416aa212b4da68b1671ac3"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67416aa212b4da68b1671ac4",
//                 "id": "67416aa212b4da68b1671ac4"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67416aa212b4da68b1671ac5",
//                 "id": "67416aa212b4da68b1671ac5"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67416aa212b4da68b1671ac6",
//                 "id": "67416aa212b4da68b1671ac6"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:39:46.831Z",
//         "__v": 0,
//         "id": "67416aa212b4da68b1671ac2"
//     },
//     {
//         "_id": "6742b5521b10adfb939ed505",
//         "name": "Dermistry Anti Aging Intense Nourishing Night Repair Cream 50 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".webp"
//         ],
//         "brand": "DERMISTRY",
//         "price": 281,
//         "oldPrice": 233,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b5521b10adfb939ed506",
//                 "id": "6742b5521b10adfb939ed506"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b5521b10adfb939ed507",
//                 "id": "6742b5521b10adfb939ed507"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b5521b10adfb939ed508",
//                 "id": "6742b5521b10adfb939ed508"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b5521b10adfb939ed509",
//                 "id": "6742b5521b10adfb939ed509"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:10:42.028Z",
//         "__v": 0,
//         "id": "6742b5521b10adfb939ed505"
//     },
//     {
//         "_id": "6742b61f1b10adfb939ede1f",
//         "name": "Inlife Super Reds Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Inlife",
//         "price": 999,
//         "oldPrice": 879,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b61f1b10adfb939ede20",
//                 "id": "6742b61f1b10adfb939ede20"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b61f1b10adfb939ede21",
//                 "id": "6742b61f1b10adfb939ede21"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b61f1b10adfb939ede22",
//                 "id": "6742b61f1b10adfb939ede22"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b61f1b10adfb939ede23",
//                 "id": "6742b61f1b10adfb939ede23"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:14:07.452Z",
//         "__v": 0,
//         "id": "6742b61f1b10adfb939ede1f"
//     },
//     {
//         "_id": "6742b72e1b10adfb939ee557",
//         "name": "Inlife Super Greens Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".webp"
//         ],
//         "brand": "Inlife",
//         "price": 799,
//         "oldPrice": 899,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b72e1b10adfb939ee558",
//                 "id": "6742b72e1b10adfb939ee558"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b72e1b10adfb939ee559",
//                 "id": "6742b72e1b10adfb939ee559"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b72e1b10adfb939ee55a",
//                 "id": "6742b72e1b10adfb939ee55a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b72e1b10adfb939ee55b",
//                 "id": "6742b72e1b10adfb939ee55b"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:18:38.670Z",
//         "__v": 0,
//         "id": "6742b72e1b10adfb939ee557"
//     },
//     {
//         "_id": "6742b8921b10adfb939eeb9e",
//         "name": "Fostelo Women's Meryl Handbag (Maroon) (JM_FSB-1747)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "FOSTELO",
//         "price": 589,
//         "oldPrice": 455,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b8921b10adfb939eeb9f",
//                 "id": "6742b8921b10adfb939eeb9f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b8921b10adfb939eeba0",
//                 "id": "6742b8921b10adfb939eeba0"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b8921b10adfb939eeba1",
//                 "id": "6742b8921b10adfb939eeba1"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b8921b10adfb939eeba2",
//                 "id": "6742b8921b10adfb939eeba2"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:24:34.076Z",
//         "__v": 0,
//         "id": "6742b8921b10adfb939eeb9e"
//     },
//     {
//         "_id": "6742b9e71b10adfb939ef25e",
//         "name": "Kerala Naturals Rose Water 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Kerala Naturals",
//         "price": 119,
//         "oldPrice": 98,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b9e71b10adfb939ef25f",
//                 "id": "6742b9e71b10adfb939ef25f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b9e71b10adfb939ef260",
//                 "id": "6742b9e71b10adfb939ef260"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b9e71b10adfb939ef261",
//                 "id": "6742b9e71b10adfb939ef261"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b9e71b10adfb939ef262",
//                 "id": "6742b9e71b10adfb939ef262"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:30:15.100Z",
//         "__v": 0,
//         "id": "6742b9e71b10adfb939ef25e"
//     },
//     {
//         "_id": "6742baca1b10adfb939efa95",
//         "name": "Dr Batra's Natural Cleansing Milk - Echinacea & Chamomile (Pack of 3 x 100 ml)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "Dr Batra'S",
//         "price": 556,
//         "oldPrice": 456,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 67,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742baca1b10adfb939efa96",
//                 "id": "6742baca1b10adfb939efa96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742baca1b10adfb939efa97",
//                 "id": "6742baca1b10adfb939efa97"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742baca1b10adfb939efa98",
//                 "id": "6742baca1b10adfb939efa98"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742baca1b10adfb939efa99",
//                 "id": "6742baca1b10adfb939efa99"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:34:02.708Z",
//         "__v": 0,
//         "id": "6742baca1b10adfb939efa95"
//     },
//     {
//         "_id": "6742bcab1b10adfb939f0448",
//         "name": "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)/Octa-core/4GB RAM/64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 grams)/Dual band WiFi + SIM/Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".webp"
//         ],
//         "brand": "JIO",
//         "price": 18999,
//         "oldPrice": 15999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [
//             "12GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bcab1b10adfb939f0449",
//                 "id": "6742bcab1b10adfb939f0449"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bcab1b10adfb939f044a",
//                 "id": "6742bcab1b10adfb939f044a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bcab1b10adfb939f044b",
//                 "id": "6742bcab1b10adfb939f044b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bcab1b10adfb939f044c",
//                 "id": "6742bcab1b10adfb939f044c"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:42:03.691Z",
//         "__v": 0,
//         "id": "6742bcab1b10adfb939f0448"
//     },
//     {
//         "_id": "6742bd5d1b10adfb939f05d4",
//         "name": "CHUWI Intel Core i5 10th Gen 1035G1 - (16 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".webp"
//         ],
//         "brand": "CHUWI",
//         "price": 24999,
//         "oldPrice": 25999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bd5d1b10adfb939f05d5",
//                 "id": "6742bd5d1b10adfb939f05d5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bd5d1b10adfb939f05d6",
//                 "id": "6742bd5d1b10adfb939f05d6"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bd5d1b10adfb939f05d7",
//                 "id": "6742bd5d1b10adfb939f05d7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bd5d1b10adfb939f05d8",
//                 "id": "6742bd5d1b10adfb939f05d8"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:45:01.818Z",
//         "__v": 0,
//         "id": "6742bd5d1b10adfb939f05d4"
//     },
//     {
//         "_id": "6742be4b1b10adfb939f09c5",
//         "name": "Oppo K12x 5G 128 GB, 6 GB RAM, Breeze Blue, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".jpg"
//         ],
//         "brand": "OPPO",
//         "price": 14999,
//         "oldPrice": 15888,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742be4b1b10adfb939f09c6",
//                 "id": "6742be4b1b10adfb939f09c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742be4b1b10adfb939f09c7",
//                 "id": "6742be4b1b10adfb939f09c7"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742be4b1b10adfb939f09c8",
//                 "id": "6742be4b1b10adfb939f09c8"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742be4b1b10adfb939f09c9",
//                 "id": "6742be4b1b10adfb939f09c9"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:48:59.859Z",
//         "__v": 0,
//         "id": "6742be4b1b10adfb939f09c5"
//     },
//     {
//         "_id": "6742bf121b10adfb939f0b5d",
//         "name": "Realme Narzo N65 5G 128 GB, 4 GB RAM, Amber Gold, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             ".webp",
//             ".webp"
//         ],
//         "brand": "Realme",
//         "price": 12499,
//         "oldPrice": 11999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bf121b10adfb939f0b5e",
//                 "id": "6742bf121b10adfb939f0b5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bf121b10adfb939f0b5f",
//                 "id": "6742bf121b10adfb939f0b5f"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bf121b10adfb939f0b60",
//                 "id": "6742bf121b10adfb939f0b60"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bf121b10adfb939f0b61",
//                 "id": "6742bf121b10adfb939f0b61"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:52:18.977Z",
//         "__v": 0,
//         "id": "6742bf121b10adfb939f0b5d"
//     }
// ]

// let product_final = [
//     {
//         "_id": "66cf364a7f21a4cf0943b087",
//         "name": "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirts",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "GESPO_Black_&_T-1.jpg",
//             "GESPO_Black_&_T-2.webp",
//             "GESPO_Black_&_T-3.webp"
//         ],
//         "brand": "GESPO",
//         "price": 399,
//         "oldPrice": 499,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 2,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61073f4ee2e36a03e90b",
//                 "id": "670a61073f4ee2e36a03e90b"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61073f4ee2e36a03e90c",
//                 "id": "670a61073f4ee2e36a03e90c"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61073f4ee2e36a03e90d",
//                 "id": "670a61073f4ee2e36a03e90d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61073f4ee2e36a03e90e",
//                 "id": "670a61073f4ee2e36a03e90e"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61073f4ee2e36a03e90f",
//                 "id": "670a61073f4ee2e36a03e90f"
//             },
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b50b561347e5c638f8eba",
//                 "id": "670b50b561347e5c638f8eba"
//             }
//         ],
//         "dateCreated": "2024-08-28T14:38:02.893Z",
//         "__v": 0,
//         "id": "66cf364a7f21a4cf0943b087"
//     },
//     {
//         "_id": "66d1df5c88319dc216a20017",
//         "name": "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)",
//         "description": "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
//         "images": [
//             "VNEED_Cotton_Bl-1.jpg",
//             "VNEED_Cotton_Bl-2.jpg",
//             "VNEED_Cotton_Bl-3.jpg",
//             "VNEED_Cotton_Bl-4.jpg"
//         ],
//         "brand": "VNEED",
//         "price": 50000,
//         "oldPrice": 655,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "m",
//             "XXL",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61243f4ee2e36a03e971",
//                 "id": "670a61243f4ee2e36a03e971"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61243f4ee2e36a03e972",
//                 "id": "670a61243f4ee2e36a03e972"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61243f4ee2e36a03e973",
//                 "id": "670a61243f4ee2e36a03e973"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61243f4ee2e36a03e974",
//                 "id": "670a61243f4ee2e36a03e974"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61243f4ee2e36a03e975",
//                 "id": "670a61243f4ee2e36a03e975"
//             },
//             {
//                 "value": "LK",
//                 "label": "Sri Lanka",
//                 "_id": "670a61243f4ee2e36a03e976",
//                 "id": "670a61243f4ee2e36a03e976"
//             }
//         ],
//         "dateCreated": "2024-08-30T15:03:56.294Z",
//         "__v": 0,
//         "updatedAt": "2024-09-09T03:54:32.426Z",
//         "id": "66d1df5c88319dc216a20017"
//     },
//     {
//         "_id": "66d44646aa5c959c5b9fa1c6",
//         "name": "Altecia The Perfect Pair Women Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Altecia_The_Per-1.jpg",
//             "Altecia_The_Per-2.jpg",
//             "Altecia_The_Per-3.jpg",
//             "Altecia_The_Per-4.jpg"
//         ],
//         "brand": "Altecia",
//         "price": 650,
//         "oldPrice": 780111,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61413f4ee2e36a03e9a9",
//                 "id": "670a61413f4ee2e36a03e9a9"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a61413f4ee2e36a03e9aa",
//                 "id": "670a61413f4ee2e36a03e9aa"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "670a61413f4ee2e36a03e9ab",
//                 "id": "670a61413f4ee2e36a03e9ab"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61413f4ee2e36a03e9ac",
//                 "id": "670a61413f4ee2e36a03e9ac"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61413f4ee2e36a03e9ad",
//                 "id": "670a61413f4ee2e36a03e9ad"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "670a61413f4ee2e36a03e9ae",
//                 "id": "670a61413f4ee2e36a03e9ae"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61413f4ee2e36a03e9af",
//                 "id": "670a61413f4ee2e36a03e9af"
//             }
//         ],
//         "dateCreated": "2024-09-01T10:47:34.389Z",
//         "__v": 0,
//         "id": "66d44646aa5c959c5b9fa1c6"
//     },
//     {
//         "_id": "66d491377d46e49d1b58de97",
//         "name": "Kondom",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Kondom-1.jpg"
//         ],
//         "brand": "CLOSWIF",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61593f4ee2e36a03e9d9",
//                 "id": "670a61593f4ee2e36a03e9d9"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670a61593f4ee2e36a03e9da",
//                 "id": "670a61593f4ee2e36a03e9da"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a61593f4ee2e36a03e9db",
//                 "id": "670a61593f4ee2e36a03e9db"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670a61593f4ee2e36a03e9dc",
//                 "id": "670a61593f4ee2e36a03e9dc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670a61593f4ee2e36a03e9dd",
//                 "id": "670a61593f4ee2e36a03e9dd"
//             },
//             {
//                 "value": "AU",
//                 "label": "Australia",
//                 "_id": "670a61593f4ee2e36a03e9de",
//                 "id": "670a61593f4ee2e36a03e9de"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:07:19.145Z",
//         "__v": 0,
//         "id": "66d491377d46e49d1b58de97"
//     },
//     {
//         "_id": "66d492927d46e49d1b58df07",
//         "name": "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Siril_Poly_Silk-1.webp",
//             "Siril_Poly_Silk-2.webp",
//             "Siril_Poly_Silk-3.webp",
//             "Siril_Poly_Silk-4.webp",
//             "Siril_Poly_Silk-5.webp"
//         ],
//         "brand": "Tazo",
//         "price": 450,
//         "oldPrice": 1000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Men",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61623f4ee2e36a03ea0c",
//                 "id": "670a61623f4ee2e36a03ea0c"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd4011f039258ce560546",
//                 "id": "670cd4011f039258ce560546"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd4011f039258ce560547",
//                 "id": "670cd4011f039258ce560547"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd4011f039258ce560548",
//                 "id": "670cd4011f039258ce560548"
//             }
//         ],
//         "dateCreated": "2024-09-01T16:13:06.752Z",
//         "__v": 0,
//         "id": "66d492927d46e49d1b58df07"
//     },
//     {
//         "_id": "66d595bf247824aacf08cb8a",
//         "name": "Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt for Women low price up to off new arrival most loved collection trending tops fancy top printed top printed trouser casual wear party wear daily wear night wear top bottom set-1Pair(size -XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "Altecia_Tie_and-1.webp",
//             "Altecia_Tie_and-2.jpg",
//             "Altecia_Tie_and-3.webp",
//             "Altecia_Tie_and-4.jpg"
//         ],
//         "brand": "Altecia",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 600,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XXL"
//         ],
//         "productWeight": [
//             "1KG",
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61683f4ee2e36a03ea35",
//                 "id": "670a61683f4ee2e36a03ea35"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd3bd1f039258ce560496",
//                 "id": "670cd3bd1f039258ce560496"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd3bd1f039258ce560497",
//                 "id": "670cd3bd1f039258ce560497"
//             }
//         ],
//         "dateCreated": "2024-09-02T10:38:55.907Z",
//         "__v": 0,
//         "id": "66d595bf247824aacf08cb8a"
//     },
//     {
//         "_id": "66df0156d9c220020e25a2a6",
//         "name": "Siril Georgette Pink Color Saree with Blouse piece",
//         "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
//         "images": [
//             "Siril_Georgette-1.webp",
//             "Siril_Georgette-2.webp",
//             "Siril_Georgette-3.webp",
//             "Siril_Georgette-4.webp"
//         ],
//         "brand": "SIRIL",
//         "price": 500,
//         "oldPrice": 650,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a616d3f4ee2e36a03ea5e",
//                 "id": "670a616d3f4ee2e36a03ea5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0831a0c5f1ae830f794",
//                 "id": "670aa0831a0c5f1ae830f794"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0831a0c5f1ae830f795",
//                 "id": "670aa0831a0c5f1ae830f795"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0831a0c5f1ae830f796",
//                 "id": "670aa0831a0c5f1ae830f796"
//             }
//         ],
//         "dateCreated": "2024-09-09T14:08:22.354Z",
//         "__v": 0,
//         "id": "66df0156d9c220020e25a2a6"
//     },
//     {
//         "_id": "66e1327804413e6a409f9689",
//         "name": "Aashirvaad Superior Whole Wheat MP Atta 1000kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Aashirvaad_Supe-1.webp",
//             "Aashirvaad_Supe-2.webp"
//         ],
//         "brand": "AASHIRVAAD",
//         "price": 2,
//         "oldPrice": 270,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 169,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "4KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a617c3f4ee2e36a03eab0",
//                 "id": "670a617c3f4ee2e36a03eab0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ed4fa94c7ca12096598",
//                 "id": "670a7ed4fa94c7ca12096598"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:02:32.029Z",
//         "__v": 0,
//         "id": "66e1327804413e6a409f9689"
//     },
//     {
//         "_id": "66e132f304413e6a409f96bd",
//         "name": "Good Life MP Wheat Chakkki Atta 1 kg",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Good_Life_MP_Wh-1.webp",
//             "Good_Life_MP_Wh-2.webp"
//         ],
//         "brand": "Good Life",
//         "price": 250,
//         "oldPrice": 330,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61813f4ee2e36a03ead9",
//                 "id": "670a61813f4ee2e36a03ead9"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:04:35.741Z",
//         "__v": 0,
//         "id": "66e132f304413e6a409f96bd"
//     },
//     {
//         "_id": "66e139b767c833713b24751e",
//         "name": "HP 15s-fr5012TU Standard Laptop (Intel Core i3-1215U/8 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home/MSO/FHD), 39.6cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "HP_15s-fr5012TU-1.webp",
//             "HP_15s-fr5012TU-2.webp"
//         ],
//         "brand": "HP",
//         "price": 35000,
//         "oldPrice": 42000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 15,
//         "productRam": [
//             "8GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61d63f4ee2e36a03eca7",
//                 "id": "670a61d63f4ee2e36a03eca7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa09a1a0c5f1ae830f80c",
//                 "id": "670aa09a1a0c5f1ae830f80c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa09a1a0c5f1ae830f80d",
//                 "id": "670aa09a1a0c5f1ae830f80d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa09a1a0c5f1ae830f80e",
//                 "id": "670aa09a1a0c5f1ae830f80e"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:33:27.831Z",
//         "__v": 0,
//         "id": "66e139b767c833713b24751e"
//     },
//     {
//         "_id": "66e13a3b67c833713b24759f",
//         "name": "Fortune Sunlite Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Fortune_Sunlite-1.webp",
//             "Fortune_Sunlite-2.jpg"
//         ],
//         "brand": "Fortune",
//         "price": 150,
//         "oldPrice": 170,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61dc3f4ee2e36a03ecd0",
//                 "id": "670a61dc3f4ee2e36a03ecd0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f59fa94c7ca12096796",
//                 "id": "670a7f59fa94c7ca12096796"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:35:39.653Z",
//         "__v": 0,
//         "id": "66e13a3b67c833713b24759f"
//     },
//     {
//         "_id": "66e13a9e67c833713b2475d9",
//         "name": "Good Life Kachi Ghani Mustard Oil 1 L (Pouch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Good_Life_Kachi-1.webp",
//             "Good_Life_Kachi-2.webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 4500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61f43f4ee2e36a03ed0e",
//                 "id": "670a61f43f4ee2e36a03ed0e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e79fa94c7ca12096432",
//                 "id": "670a7e79fa94c7ca12096432"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:37:18.172Z",
//         "__v": 0,
//         "id": "66e13a9e67c833713b2475d9"
//     },
//     {
//         "_id": "66e13bcc67c833713b24763a",
//         "name": "ZAALIQA Girls Black Handbag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "ZAALIQA_Girls_B-1.jpg",
//             "ZAALIQA_Girls_B-2.webp",
//             "ZAALIQA_Girls_B-3.jpg"
//         ],
//         "brand": "ZAALIQA",
//         "price": 620,
//         "oldPrice": 750,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a61fb3f4ee2e36a03ed3f",
//                 "id": "670a61fb3f4ee2e36a03ed3f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd6801f039258ce561017",
//                 "id": "670cd6801f039258ce561017"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:42:20.690Z",
//         "__v": 0,
//         "id": "66e13bcc67c833713b24763a"
//     },
//     {
//         "_id": "66e13c6867c833713b24768b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Grey Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "KSC_\"KHATUSHYAM-1.webp",
//             "KSC_\"KHATUSHYAM-2.webp"
//         ],
//         "brand": "KSC",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62033f4ee2e36a03ed70",
//                 "id": "670a62033f4ee2e36a03ed70"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b45885efc6a71f2adc4fe",
//                 "id": "670b45885efc6a71f2adc4fe"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:44:56.302Z",
//         "__v": 0,
//         "id": "66e13c6867c833713b24768b"
//     },
//     {
//         "_id": "66e13d6267c833713b24772b",
//         "name": "KSC \"KHATUSHYAM COLLECTION\" Red Pu For Women Handheld Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "KSC_\"KHATUSHYAM-1.jpg",
//             "KSC_\"KHATUSHYAM-2.webp"
//         ],
//         "brand": "KSC ",
//         "price": 750,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 9,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62133f4ee2e36a03edd2",
//                 "id": "670a62133f4ee2e36a03edd2"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7f34fa94c7ca1209674c",
//                 "id": "670a7f34fa94c7ca1209674c"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:49:06.885Z",
//         "__v": 0,
//         "id": "66e13d6267c833713b24772b"
//     },
//     {
//         "_id": "66e13dee67c833713b247765",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "LIVE_FASHION_Bl-1.jpg",
//             "LIVE_FASHION_Bl-2.jpg",
//             "LIVE_FASHION_Bl-3.jpg"
//         ],
//         "brand": "LIVE FAShion",
//         "price": 650,
//         "oldPrice": 850,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a621b3f4ee2e36a03ee03",
//                 "id": "670a621b3f4ee2e36a03ee03"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8bd1f039258ce5616a8",
//                 "id": "670cd8bd1f039258ce5616a8"
//             }
//         ],
//         "dateCreated": "2024-09-11T06:51:26.242Z",
//         "__v": 0,
//         "id": "66e13dee67c833713b247765"
//     },
//     {
//         "_id": "66e14052d7b24f428474f35a",
//         "name": "POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "POCO_C61,_4GB_R-1.webp",
//             "POCO_C61,_4GB_R-2.jpg"
//         ],
//         "brand": "POCO",
//         "price": 13000,
//         "oldPrice": 15000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62223f4ee2e36a03ee34",
//                 "id": "670a62223f4ee2e36a03ee34"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd88b1f039258ce5615e2",
//                 "id": "670cd88b1f039258ce5615e2"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd88b1f039258ce5615e3",
//                 "id": "670cd88b1f039258ce5615e3"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:01:38.292Z",
//         "__v": 0,
//         "id": "66e14052d7b24f428474f35a"
//     },
//     {
//         "_id": "66e140e4d7b24f428474f419",
//         "name": "Aqualite Black & Grey Slip-Resistance Sliders for Men",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Aqualite_Black_-1.webp",
//             "Aqualite_Black_-2.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 850,
//         "oldPrice": 920,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "673089cf45d0a9534fb3bed5",
//         "subCat": "Men Footwear",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a622a3f4ee2e36a03ee65",
//                 "id": "670a622a3f4ee2e36a03ee65"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8501f039258ce561516",
//                 "id": "670cd8501f039258ce561516"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8501f039258ce561517",
//                 "id": "670cd8501f039258ce561517"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8501f039258ce561518",
//                 "id": "670cd8501f039258ce561518"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8501f039258ce561519",
//                 "id": "670cd8501f039258ce561519"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670cd8501f039258ce56151a",
//                 "id": "670cd8501f039258ce56151a"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:04:04.916Z",
//         "__v": 0,
//         "id": "66e140e4d7b24f428474f419"
//     },
//     {
//         "_id": "66e14d36d7b24f428474f81e",
//         "name": "Fabbmate Casual Sports shoes White Sneakers for Women Girls White Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Fabbmate_Casual-1.jpg",
//             "Fabbmate_Casual-2.jpg"
//         ],
//         "brand": "Fabbmate",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62343f4ee2e36a03ee96",
//                 "id": "670a62343f4ee2e36a03ee96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd8201f039258ce561454",
//                 "id": "670cd8201f039258ce561454"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cd8201f039258ce561455",
//                 "id": "670cd8201f039258ce561455"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670cd8201f039258ce561456",
//                 "id": "670cd8201f039258ce561456"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cd8201f039258ce561457",
//                 "id": "670cd8201f039258ce561457"
//             }
//         ],
//         "dateCreated": "2024-09-11T07:56:38.417Z",
//         "__v": 0,
//         "id": "66e14d36d7b24f428474f81e"
//     },
//     {
//         "_id": "66e15fbacbb9035ac19bca85",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Paragon_PUK7014-1.jpg",
//             "Paragon_PUK7014-2.jpg",
//             "Paragon_PUK7014-3.jpg",
//             "Paragon_PUK7014-4.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 320,
//         "oldPrice": 450,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 11,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a623c3f4ee2e36a03eec7",
//                 "id": "670a623c3f4ee2e36a03eec7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a623c3f4ee2e36a03eec8",
//                 "id": "670a623c3f4ee2e36a03eec8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7b31f039258ce5612f2",
//                 "id": "670cd7b31f039258ce5612f2"
//             }
//         ],
//         "dateCreated": "2024-09-11T09:15:38.977Z",
//         "__v": 0,
//         "id": "66e15fbacbb9035ac19bca85"
//     },
//     {
//         "_id": "66e16de3cbb9035ac19bccf6",
//         "name": "Aqualite Women Pista Green Casual Shoes",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "Aqualite_Women_-1.jpg",
//             "Aqualite_Women_-2.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 450,
//         "oldPrice": 550,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62773f4ee2e36a03ef41",
//                 "id": "670a62773f4ee2e36a03ef41"
//             },
//             {
//                 "value": "ID",
//                 "label": "Indonesia",
//                 "_id": "670cd7631f039258ce561233",
//                 "id": "670cd7631f039258ce561233"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd7631f039258ce561234",
//                 "id": "670cd7631f039258ce561234"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:16:03.095Z",
//         "__v": 0,
//         "id": "66e16de3cbb9035ac19bccf6"
//     },
//     {
//         "_id": "66e16ee8cbb9035ac19bcd16",
//         "name": "Paragon Women's Trendy Wedge Heel Sandals with Cushioned Sole and Sturdy Construction for Everyday Use",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "Paragon_Women's-1.jpg",
//             "Paragon_Women's-2.jpg",
//             "Paragon_Women's-3.webp",
//             "Paragon_Women's-4.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 450,
//         "oldPrice": 650,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a627c3f4ee2e36a03ef72",
//                 "id": "670a627c3f4ee2e36a03ef72"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd71c1f039258ce56117e",
//                 "id": "670cd71c1f039258ce56117e"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:20:24.524Z",
//         "__v": 0,
//         "id": "66e16ee8cbb9035ac19bcd16"
//     },
//     {
//         "_id": "66e17196cbb9035ac19bce4d",
//         "name": "FLORES Stylish Fashion Backpack For Girls and boys",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "FLORES_Stylish_-1.jpg",
//             "FLORES_Stylish_-2.jpg",
//             "FLORES_Stylish_-3.jpg",
//             "FLORES_Stylish_-4.jpg"
//         ],
//         "brand": "FLORES",
//         "price": 560,
//         "oldPrice": 590,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfb13490222862ae78cd",
//         "subCat": "Girls",
//         "subCatName": "Girls",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62843f4ee2e36a03efab",
//                 "id": "670a62843f4ee2e36a03efab"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:31:50.421Z",
//         "__v": 0,
//         "id": "66e17196cbb9035ac19bce4d"
//     },
//     {
//         "_id": "66e17237cbb9035ac19bced8",
//         "name": "Fytona Medium Laptop Backpack | Light weight For School Collage Office Tuition and Picnic | Waterproof Backpack (Grey, 25 L)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
//         "images": [
//             "Fytona_Medium_L-1.jpg",
//             "Fytona_Medium_L-2.jpg"
//         ],
//         "brand": "Fytona",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfab3490222862ae78c7",
//         "subCat": "Boys",
//         "subCatName": "Boys",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 450,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a628c3f4ee2e36a03efec",
//                 "id": "670a628c3f4ee2e36a03efec"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb771f039258ce5620dd",
//                 "id": "670cdb771f039258ce5620dd"
//             }
//         ],
//         "dateCreated": "2024-09-11T10:34:31.443Z",
//         "__v": 0,
//         "id": "66e17237cbb9035ac19bced8"
//     },
//     {
//         "_id": "66e293e22c48007bafc155ab",
//         "name": "DANGAR ENTERPRISE Kundan white Earring for Women and Girls-Terndy Women Pooja And Diwali Special Attractive Earrings Set For Party Occasion-Kundan work studs-Triangle Shape Kundan Stud Earring-1 Pair",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "DANGAR_ENTERPRI-1.jpg"
//         ],
//         "brand": "DANGAR ENTERPRISE",
//         "price": 280,
//         "oldPrice": 320,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 140,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62913f4ee2e36a03f01d",
//                 "id": "670a62913f4ee2e36a03f01d"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdb101f039258ce561f46",
//                 "id": "670cdb101f039258ce561f46"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdb101f039258ce561f47",
//                 "id": "670cdb101f039258ce561f47"
//             }
//         ],
//         "dateCreated": "2024-09-12T07:10:26.046Z",
//         "__v": 0,
//         "id": "66e293e22c48007bafc155ab"
//     },
//     {
//         "_id": "66e50d28ea40d089af7d6bed",
//         "name": "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women | Ethnic Kurta Set for Women (set of 1) (5XL)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "VNEED_Women_Emb-1.jpg",
//             "VNEED_Women_Emb-2.jpg",
//             "VNEED_Women_Emb-3.jpg"
//         ],
//         "brand": "VNEED",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62963f4ee2e36a03f06e",
//                 "id": "670a62963f4ee2e36a03f06e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdae21f039258ce561e76",
//                 "id": "670cdae21f039258ce561e76"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdae21f039258ce561e77",
//                 "id": "670cdae21f039258ce561e77"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:12:24.553Z",
//         "__v": 0,
//         "id": "66e50d28ea40d089af7d6bed"
//     },
//     {
//         "_id": "66e50df7ea40d089af7d6c1d",
//         "name": "Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Tecno_POP_8_64_-1.webp",
//             "Tecno_POP_8_64_-2.jpg",
//             "Tecno_POP_8_64_-3.webp"
//         ],
//         "brand": "Tecno",
//         "price": 12300,
//         "oldPrice": 13500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a629b3f4ee2e36a03f0a7",
//                 "id": "670a629b3f4ee2e36a03f0a7"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda971f039258ce561da8",
//                 "id": "670cda971f039258ce561da8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:15:51.476Z",
//         "__v": 0,
//         "id": "66e50df7ea40d089af7d6c1d"
//     },
//     {
//         "_id": "66e50fbfea40d089af7d6c48",
//         "name": "Apple iPhone 13 128 GB, Pink",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Apple_iPhone_13-1.webp",
//             "Apple_iPhone_13-2.jpg",
//             "Apple_iPhone_13-3.jpg"
//         ],
//         "brand": "Apple",
//         "price": 39600,
//         "oldPrice": 389000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 14,
//         "productRam": [
//             "3GB",
//             "4GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62a13f4ee2e36a03f0d8",
//                 "id": "670a62a13f4ee2e36a03f0d8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cda6b1f039258ce561cdc",
//                 "id": "670cda6b1f039258ce561cdc"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670cda6b1f039258ce561cdd",
//                 "id": "670cda6b1f039258ce561cdd"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:23:27.825Z",
//         "__v": 0,
//         "id": "66e50fbfea40d089af7d6c48"
//     },
//     {
//         "_id": "66e510aeea40d089af7d6c7a",
//         "name": "Aqualite's Trendy and Stylish Orange Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Aqualite's_Tren-1.jpg",
//             "Aqualite's_Tren-2.jpg",
//             "Aqualite's_Tren-3.jpg"
//         ],
//         "brand": "Aqualite",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1400,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b13f4ee2e36a03f101",
//                 "id": "670a62b13f4ee2e36a03f101"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7ee3fa94c7ca120965d8",
//                 "id": "670a7ee3fa94c7ca120965d8"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:27:26.448Z",
//         "__v": 0,
//         "id": "66e510aeea40d089af7d6c7a"
//     },
//     {
//         "_id": "66e51372ea40d089af7d6d77",
//         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Paragon_PUK7014-1.jpg",
//             "Paragon_PUK7014-2.jpg",
//             "Paragon_PUK7014-3.jpg"
//         ],
//         "brand": "Paragon",
//         "price": 650,
//         "oldPrice": 690,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "67308a0745d0a9534fb3bef9",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 13,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62b63f4ee2e36a03f12a",
//                 "id": "670a62b63f4ee2e36a03f12a"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670cd9e71f039258ce561b48",
//                 "id": "670cd9e71f039258ce561b48"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9e71f039258ce561b49",
//                 "id": "670cd9e71f039258ce561b49"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:39:14.497Z",
//         "__v": 0,
//         "id": "66e51372ea40d089af7d6d77"
//     },
//     {
//         "_id": "66e5182cea40d089af7d6e4d",
//         "name": "Aqualite's Trendy and Stylish Pista Flip Flops & Slides For Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Aqualite's_Tren-1.jpg",
//             "Aqualite's_Tren-2.jpg"
//         ],
//         "brand": "Denill",
//         "price": 260,
//         "oldPrice": 320,
//         "catName": "Footwear",
//         "catId": "670f548ce86c762e3cad6ca9",
//         "subCatId": "66c0e00a3490222862ae78f1",
//         "subCat": "Women FootWear",
//         "subCatName": "Women FootWear",
//         "category": {
//             "_id": "670f548ce86c762e3cad6ca9",
//             "name": "Footwear",
//             "slug": "Footwear",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
//             ],
//             "color": "#def3ff",
//             "createdAt": "2024-10-16T05:52:12.292Z",
//             "updatedAt": "2024-11-12T16:15:02.903Z",
//             "__v": 0,
//             "id": "670f548ce86c762e3cad6ca9"
//         },
//         "countInStock": 165,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bb3f4ee2e36a03f153",
//                 "id": "670a62bb3f4ee2e36a03f153"
//             }
//         ],
//         "dateCreated": "2024-09-14T04:59:24.006Z",
//         "__v": 0,
//         "id": "66e5182cea40d089af7d6e4d"
//     },
//     {
//         "_id": "66e52b5be2e06fb4c9259dd2",
//         "name": "Good Life Refined Rice Bran Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Good_Life_Refin-1.webp"
//         ],
//         "brand": "Good Life",
//         "price": 190,
//         "oldPrice": 230,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62bf3f4ee2e36a03f17c",
//                 "id": "670a62bf3f4ee2e36a03f17c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cd9791f039258ce5619be",
//                 "id": "670cd9791f039258ce5619be"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:21:15.971Z",
//         "__v": 0,
//         "id": "66e52b5be2e06fb4c9259dd2"
//     },
//     {
//         "_id": "66e52bc5e2e06fb4c9259e04",
//         "name": "Gemini Refined Sunflower Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Gemini_Refined_-1.webp"
//         ],
//         "brand": "Gemini",
//         "price": 180,
//         "oldPrice": 210,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "670f5534e86c762e3cad6d09",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1700,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62c53f4ee2e36a03f1a5",
//                 "id": "670a62c53f4ee2e36a03f1a5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fc9fa94c7ca120969ee",
//                 "id": "670a7fc9fa94c7ca120969ee"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:23:01.356Z",
//         "__v": 0,
//         "id": "66e52bc5e2e06fb4c9259e04"
//     },
//     {
//         "_id": "66e52c1ce2e06fb4c9259e1e",
//         "name": "Saffola Gold Pro Healthy Lifestyle RiceBran Based Blended Oil 1 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Saffola_Gold_Pr-1.webp"
//         ],
//         "brand": "Saffola",
//         "price": 150,
//         "oldPrice": 180,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dfd53490222862ae78df",
//         "subCat": "Cooking Essentials",
//         "subCatName": "Cooking Essentials",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G",
//             "1KG"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ca3f4ee2e36a03f1ce",
//                 "id": "670a62ca3f4ee2e36a03f1ce"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fb7fa94c7ca120968cb",
//                 "id": "670a7fb7fa94c7ca120968cb"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:24:28.887Z",
//         "__v": 0,
//         "id": "66e52c1ce2e06fb4c9259e1e"
//     },
//     {
//         "_id": "66e52d1ce2e06fb4c9259e9e",
//         "name": "Surf Excel Matic Front Load Liquid Detergent 2 L",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Surf_Excel_Mati-1.webp",
//             "Surf_Excel_Mati-2.jpg"
//         ],
//         "brand": "Surf Excel",
//         "price": 356,
//         "oldPrice": 380,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "66c0dff73490222862ae78e5",
//         "subCat": "Home Care",
//         "subCatName": "Home Care",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1400,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [
//             "500G"
//         ],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d33f4ee2e36a03f220",
//                 "id": "670a62d33f4ee2e36a03f220"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e9afa94c7ca120964b1",
//                 "id": "670a7e9afa94c7ca120964b1"
//             }
//         ],
//         "dateCreated": "2024-09-14T06:28:44.902Z",
//         "__v": 0,
//         "id": "66e52d1ce2e06fb4c9259e9e"
//     },
//     {
//         "_id": "66e6839f49fb19355a7a0630",
//         "name": "Muuchstac Ocean Face Wash for Men, Fights Acne & Pimple, Skin Whitening & Brightening, All Skin Types, 100 Ml Each (Pack Of 2)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Muuchstac_Ocean-1.webp",
//             "Muuchstac_Ocean-2.webp"
//         ],
//         "brand": "Muuchstac",
//         "price": 178,
//         "oldPrice": 190,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62d83f4ee2e36a03f249",
//                 "id": "670a62d83f4ee2e36a03f249"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc711f039258ce5626a1",
//                 "id": "670cdc711f039258ce5626a1"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:50:07.386Z",
//         "__v": 0,
//         "id": "66e6839f49fb19355a7a0630"
//     },
//     {
//         "_id": "66e6841249fb19355a7a064e",
//         "name": "Vaseline Original Care Lip Therapy 17 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Vaseline_Origin-1.webp",
//             "Vaseline_Origin-2.jpg"
//         ],
//         "brand": "Vaseline",
//         "price": 145,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e13f4ee2e36a03f272",
//                 "id": "670a62e13f4ee2e36a03f272"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7e8afa94c7ca12096471",
//                 "id": "670a7e8afa94c7ca12096471"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:52:02.859Z",
//         "__v": 0,
//         "id": "66e6841249fb19355a7a064e"
//     },
//     {
//         "_id": "66e684ad49fb19355a7a06d9",
//         "name": "WOW Skin Science Rose Water for Face | Made with Pure Kannauj Rose Extracts | Use It As Toner, Skin Hyderator & Makeup Primer | 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "WOW_Skin_Scienc-1.webp",
//             "WOW_Skin_Scienc-2.webp"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 150,
//         "oldPrice": 165,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 140,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62e53f4ee2e36a03f29b",
//                 "id": "670a62e53f4ee2e36a03f29b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7eaefa94c7ca120964f2",
//                 "id": "670a7eaefa94c7ca120964f2"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:54:37.303Z",
//         "__v": 0,
//         "id": "66e684ad49fb19355a7a06d9"
//     },
//     {
//         "_id": "66e685cf49fb19355a7a0a5f",
//         "name": "Nisha Creme Hair Color - 3.5 Chocolate Brown 60 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Nisha_Creme_Hai-1.jpg",
//             "Nisha_Creme_Hai-2.jpg"
//         ],
//         "brand": "Nisha",
//         "price": 160,
//         "oldPrice": 170,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 160,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62ea3f4ee2e36a03f2c4",
//                 "id": "670a62ea3f4ee2e36a03f2c4"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdc0f1f039258ce562421",
//                 "id": "670cdc0f1f039258ce562421"
//             }
//         ],
//         "dateCreated": "2024-09-15T06:59:27.733Z",
//         "__v": 0,
//         "id": "66e685cf49fb19355a7a0a5f"
//     },
//     {
//         "_id": "66e6864549fb19355a7a0a9a",
//         "name": "Navratna Ayurvedic Cool Oil 200 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Navratna_Ayurve-1.webp"
//         ],
//         "brand": "Navratna",
//         "price": 10,
//         "oldPrice": 145,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 10,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a62fb3f4ee2e36a03f325",
//                 "id": "670a62fb3f4ee2e36a03f325"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbe51f039258ce56234e",
//                 "id": "670cdbe51f039258ce56234e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:01:25.456Z",
//         "__v": 0,
//         "id": "66e6864549fb19355a7a0a9a"
//     },
//     {
//         "_id": "66e6875c49fb19355a7a0b73",
//         "name": "The Gianna Ring",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "The_Gianna_Ring-1.webp"
//         ],
//         "brand": "Promise Collection",
//         "price": 650,
//         "oldPrice": 780,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63033f4ee2e36a03f366",
//                 "id": "670a63033f4ee2e36a03f366"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdbc11f039258ce56227a",
//                 "id": "670cdbc11f039258ce56227a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670cdbc11f039258ce56227b",
//                 "id": "670cdbc11f039258ce56227b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:06:04.316Z",
//         "__v": 0,
//         "id": "66e6875c49fb19355a7a0b73"
//     },
//     {
//         "_id": "66e688ed49fb19355a7a0bb7",
//         "name": "NEW GOLDEN LONG JHUMKI EARRING",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "NEW_GOLDEN_LONG-1.jpg"
//         ],
//         "brand": "JSV CAHIRA",
//         "price": 350,
//         "oldPrice": 430,
//         "catName": "Jewellery",
//         "catId": "670f54e8e86c762e3cad6cd1",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": null,
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63093f4ee2e36a03f38f",
//                 "id": "670a63093f4ee2e36a03f38f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0911f039258ce563288",
//                 "id": "670ce0911f039258ce563288"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:12:45.320Z",
//         "__v": 0,
//         "id": "66e688ed49fb19355a7a0bb7"
//     },
//     {
//         "_id": "66e6899b49fb19355a7a0bef",
//         "name": "VIBRANCE Jewellery Earrings for Women Oxidised Silver Jhumka earrings for Girls and Women",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "VIBRANCE_Jewell-1.webp",
//             "VIBRANCE_Jewell-2.webp"
//         ],
//         "brand": "VIBRANCE",
//         "price": 340,
//         "oldPrice": 370,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 12,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a630e3f4ee2e36a03f3b8",
//                 "id": "670a630e3f4ee2e36a03f3b8"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce05f1f039258ce5631ab",
//                 "id": "670ce05f1f039258ce5631ab"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:15:39.101Z",
//         "__v": 0,
//         "id": "66e6899b49fb19355a7a0bef"
//     },
//     {
//         "_id": "66e68a4549fb19355a7a0c1b",
//         "name": "SIRIMIRI SMER-1011 German Silver Drops & Danglers",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "SIRIMIRI_SMER-1-1.jpg"
//         ],
//         "brand": "SIRIMIRI",
//         "price": 260,
//         "oldPrice": 290,
//         "catName": "Jewellery",
//         "catId": "6728977fddcbbe211e109df9",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "6728977fddcbbe211e109df9",
//             "name": "Jewellery",
//             "slug": "Jewellery",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
//             ],
//             "color": "#d3ffd9",
//             "createdAt": "2024-11-04T09:44:31.038Z",
//             "updatedAt": "2024-11-27T04:38:58.700Z",
//             "__v": 0,
//             "id": "6728977fddcbbe211e109df9"
//         },
//         "countInStock": 100,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63133f4ee2e36a03f3e1",
//                 "id": "670a63133f4ee2e36a03f3e1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce0161f039258ce5630cf",
//                 "id": "670ce0161f039258ce5630cf"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:18:29.173Z",
//         "__v": 0,
//         "id": "66e68a4549fb19355a7a0c1b"
//     },
//     {
//         "_id": "66e68b1049fb19355a7a0c4e",
//         "name": "Zandu Chyavanprashad With No Added Sugar 900 gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Zandu_Chyavanpr-1.webp",
//             "Zandu_Chyavanpr-2.jpg"
//         ],
//         "brand": "Zandu",
//         "price": 480,
//         "oldPrice": 520,
//         "catName": "Groceries",
//         "catId": "670f54a3e86c762e3cad6cb3",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54a3e86c762e3cad6cb3",
//             "name": "Groceries",
//             "slug": "Groceries",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
//             ],
//             "color": "#ffe8f8",
//             "createdAt": "2024-10-16T05:52:35.762Z",
//             "updatedAt": "2024-11-12T16:14:54.039Z",
//             "__v": 0,
//             "id": "670f54a3e86c762e3cad6cb3"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63173f4ee2e36a03f40a",
//                 "id": "670a63173f4ee2e36a03f40a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a7fe6fa94c7ca12096a98",
//                 "id": "670a7fe6fa94c7ca12096a98"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:21:52.774Z",
//         "__v": 0,
//         "id": "66e68b1049fb19355a7a0c4e"
//     },
//     {
//         "_id": "66e68c51e51aa3db51455710",
//         "name": "Conbre MultipleXR2 Pro {Upgraded} HD Smart WiFi Wireless IP CCTV Security Camera | Night Vision | 2-Way Audio | Support 64 GB Micro SD Card Slot",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Conbre_Multiple-1.webp",
//             "Conbre_Multiple-2.jpg"
//         ],
//         "brand": "Conbre",
//         "price": 1450,
//         "oldPrice": 1760,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a631b3f4ee2e36a03f433",
//                 "id": "670a631b3f4ee2e36a03f433"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf9a1f039258ce562f0e",
//                 "id": "670cdf9a1f039258ce562f0e"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:27:13.034Z",
//         "__v": 0,
//         "id": "66e68c51e51aa3db51455710"
//     },
//     {
//         "_id": "66e68d24e51aa3db51455749",
//         "name": "Sony Alpha ILCE-7M3 Full-Frame 24.2MP Mirrorless Digital SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD, Low Light Camera), Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Sony_Alpha_ILCE-1.webp",
//             "Sony_Alpha_ILCE-2.webp"
//         ],
//         "brand": "Sony",
//         "price": 45000,
//         "oldPrice": 90000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b2cf1e1da2b3de3ba91",
//         "subCat": "Cameras",
//         "subCatName": "Cameras",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63213f4ee2e36a03f45c",
//                 "id": "670a63213f4ee2e36a03f45c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf6b1f039258ce562e34",
//                 "id": "670cdf6b1f039258ce562e34"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:30:44.015Z",
//         "__v": 0,
//         "id": "66e68d24e51aa3db51455749"
//     },
//     {
//         "_id": "66e68e27e51aa3db514558cd",
//         "name": "boAt Wave Fury Smartwatch with 4.64 cm (1.83 inch) HD Display, Advanced Bluetooth Calling, Functional Crown, 50+ Sports mode, IP67 Dust, Sweat & Splash Resistant (Active Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "boAt_Wave_Fury_-1.webp",
//             "boAt_Wave_Fury_-2.webp"
//         ],
//         "brand": "boAt",
//         "price": 1800,
//         "oldPrice": 2100,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 8,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63343f4ee2e36a03f485",
//                 "id": "670a63343f4ee2e36a03f485"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf3a1f039258ce562d5b",
//                 "id": "670cdf3a1f039258ce562d5b"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:35:03.008Z",
//         "__v": 0,
//         "id": "66e68e27e51aa3db514558cd"
//     },
//     {
//         "_id": "66e68ecae51aa3db5145595b",
//         "name": "Morden Smart Watch for Kids Men Women Boys Girls D116 Water Proof Touchscreen Smart Watch Bluetooth 1.44 HD Screen Smart Watch with Daily Activity Tracker, Heart Rate Sensor, Sleep Monitor - Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Morden_Smart_Wa-1.webp"
//         ],
//         "brand": "Morden",
//         "price": 2500,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1400,
//         "rating": 2,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63393f4ee2e36a03f4ae",
//                 "id": "670a63393f4ee2e36a03f4ae"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdf0b1f039258ce562c83",
//                 "id": "670cdf0b1f039258ce562c83"
//             }
//         ],
//         "dateCreated": "2024-09-15T07:37:46.263Z",
//         "__v": 0,
//         "id": "66e68ecae51aa3db5145595b"
//     },
//     {
//         "_id": "66e6ffb410ba0832baba6689",
//         "name": "Mars HD 2IN1 Nutration For Skin Foundation Golden Beige-F07",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Mars_HD_2IN1_Nu-1.webp",
//             "Mars_HD_2IN1_Nu-2.jpg"
//         ],
//         "brand": "Wow Skin Science",
//         "price": 190,
//         "oldPrice": 210,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63b03f4ee2e36a03f4fb",
//                 "id": "670a63b03f4ee2e36a03f4fb"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cdecb1f039258ce562bac",
//                 "id": "670cdecb1f039258ce562bac"
//             }
//         ],
//         "dateCreated": "2024-09-15T15:39:32.052Z",
//         "__v": 0,
//         "id": "66e6ffb410ba0832baba6689"
//     },
//     {
//         "_id": "66e7fe39cd09356c5b465f45",
//         "name": "pink solid casual shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             "pink_solid_casu-1.webp",
//             "pink_solid_casu-2.webp"
//         ],
//         "brand": "V-Mart",
//         "price": 459,
//         "oldPrice": 495,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ca3f4ee2e36a03f52c",
//                 "id": "670a63ca3f4ee2e36a03f52c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670cde281f039258ce562ad6",
//                 "id": "670cde281f039258ce562ad6"
//             }
//         ],
//         "dateCreated": "2024-09-16T09:45:29.901Z",
//         "__v": 0,
//         "id": "66e7fe39cd09356c5b465f45"
//     },
//     {
//         "_id": "66e8eafa3decb32ae2a77c6e",
//         "name": "Jobayed Hossain",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Jobayed_Hossain-1.jpg",
//             "Jobayed_Hossain-2.jpg",
//             "Jobayed_Hossain-3.jpg",
//             "Jobayed_Hossain-4.jpg",
//             "Jobayed_Hossain-5.jpg",
//             "Jobayed_Hossain-6.jpg"
//         ],
//         "brand": "V-Mart",
//         "price": 460,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1800,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d13f4ee2e36a03f56f",
//                 "id": "670a63d13f4ee2e36a03f56f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0b31a0c5f1ae830f869",
//                 "id": "670aa0b31a0c5f1ae830f869"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0b31a0c5f1ae830f86a",
//                 "id": "670aa0b31a0c5f1ae830f86a"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:35:38.759Z",
//         "__v": 0,
//         "id": "66e8eafa3decb32ae2a77c6e"
//     },
//     {
//         "_id": "66e8ed483decb32ae2a77ca6",
//         "name": "beatXP Unbound Era 2.01\" Super AMOLED Display Bluetooth Calling Smart Watch, Metal Body, Rotary Crown, 410 * 502px, 1000 Nits, 60Hz Refresh Rate, 100+ Sports Modes (Black)",
//         "description": "Introducing the beatXP Unbound Era smartwatch - the latest in smartwatch technology. This device has an impressive 2.01-inch Super AMOLED Display with a 60Hz refresh rate and a peak brightness of 1000 Nits. It also features an Always On Display. The EzyPair Technology feature allows for seamless communication via Advanced Bluetooth calling, without requiring a phone.",
//         "images": [
//             "beatXP_Unbound_-1.webp",
//             "beatXP_Unbound_-2.webp"
//         ],
//         "brand": "beatXP",
//         "price": 1200,
//         "oldPrice": 1250,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 10,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63d63f4ee2e36a03f5d0",
//                 "id": "670a63d63f4ee2e36a03f5d0"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce3911f039258ce563a99",
//                 "id": "670ce3911f039258ce563a99"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:45:28.831Z",
//         "__v": 0,
//         "id": "66e8ed483decb32ae2a77ca6"
//     },
//     {
//         "_id": "66e8ee313decb32ae2a77cfc",
//         "name": "vHP 15-fb0082AX Victus Gaming Laptop(AMD Ryzen5-5600H /8GB/512GB SSD/4 GB Nvidia GeForce RTX 3050 Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "vHP_15-fb0082AX-1.jpg",
//             "vHP_15-fb0082AX-2.jpg"
//         ],
//         "brand": "HP",
//         "price": 25000,
//         "oldPrice": 28000,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Computers and Accessories",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [
//             "6GB",
//             "8GB",
//             "10GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63db3f4ee2e36a03f5f9",
//                 "id": "670a63db3f4ee2e36a03f5f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce35d1f039258ce5639b3",
//                 "id": "670ce35d1f039258ce5639b3"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:49:21.389Z",
//         "__v": 0,
//         "id": "66e8ee313decb32ae2a77cfc"
//     },
//     {
//         "_id": "66e8ef403decb32ae2a77db4",
//         "name": "Glowworld Women Blue Printed Cotton Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Glowworld_Women-1.webp",
//             "Glowworld_Women-2.jpg",
//             "Glowworld_Women-3.jpg"
//         ],
//         "brand": "Glowworld",
//         "price": 460,
//         "oldPrice": 480,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e03f4ee2e36a03f622",
//                 "id": "670a63e03f4ee2e36a03f622"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2b11f039258ce5638ce",
//                 "id": "670ce2b11f039258ce5638ce"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:53:52.237Z",
//         "__v": 0,
//         "id": "66e8ef403decb32ae2a77db4"
//     },
//     {
//         "_id": "66e8f0793decb32ae2a77e65",
//         "name": "Siril Georgette Brown Color Saree with Blouse piece",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Siril_Georgette-1.webp",
//             "Siril_Georgette-2.jpg",
//             "Siril_Georgette-3.webp",
//             "Siril_Georgette-4.webp"
//         ],
//         "brand": "SIRIL",
//         "price": 450,
//         "oldPrice": 490,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 100,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e43f4ee2e36a03f64b",
//                 "id": "670a63e43f4ee2e36a03f64b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce2771f039258ce5637ea",
//                 "id": "670ce2771f039258ce5637ea"
//             }
//         ],
//         "dateCreated": "2024-09-17T02:59:05.066Z",
//         "__v": 0,
//         "id": "66e8f0793decb32ae2a77e65"
//     },
//     {
//         "_id": "66ea3a08c017f4365fafc3e2",
//         "name": "LIVE FASHION Black Women PU Sling Bag",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "LIVE_FASHION_Bl-1.jpg",
//             "LIVE_FASHION_Bl-2.jpg"
//         ],
//         "brand": "LIVE FASHION",
//         "price": 3500,
//         "oldPrice": 450,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "66c0dfa43490222862ae78c1",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63e93f4ee2e36a03f674",
//                 "id": "670a63e93f4ee2e36a03f674"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670aa0081a0c5f1ae830f573",
//                 "id": "670aa0081a0c5f1ae830f573"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670aa0081a0c5f1ae830f574",
//                 "id": "670aa0081a0c5f1ae830f574"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670aa0081a0c5f1ae830f575",
//                 "id": "670aa0081a0c5f1ae830f575"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:25:12.268Z",
//         "__v": 0,
//         "id": "66ea3a08c017f4365fafc3e2"
//     },
//     {
//         "_id": "66ea3ba5c017f4365fafc472",
//         "name": "beatXP Vega X 1.43\" Super AMOLED Display, One-Tap BT 5.2 Calling, Metal Body, 60Hz Refresh Rate, WIRELESS CHARGING, AI Voice Assistant Smartwatch (Black)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "beatXP_Vega_X_1-1.webp",
//             "beatXP_Vega_X_1-2.jpg"
//         ],
//         "brand": "beatXP",
//         "price": 1300,
//         "oldPrice": 1350,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63ed3f4ee2e36a03f69d",
//                 "id": "670a63ed3f4ee2e36a03f69d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1d61f039258ce56361a",
//                 "id": "670ce1d61f039258ce56361a"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:32:05.013Z",
//         "__v": 0,
//         "id": "66ea3ba5c017f4365fafc472"
//     },
//     {
//         "_id": "66ea3f14c017f4365fafc692",
//         "name": "Apple iPhone 15 256GB Black",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "images": [
//             "Apple_iPhone_15-1.webp",
//             "Apple_iPhone_15-2.webp",
//             "Apple_iPhone_15-3.webp"
//         ],
//         "brand": "Apple",
//         "price": 32000,
//         "oldPrice": 33500,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [
//             "8GB",
//             "6GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f23f4ee2e36a03f6c6",
//                 "id": "670a63f23f4ee2e36a03f6c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670ce1aa1f039258ce563536",
//                 "id": "670ce1aa1f039258ce563536"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670ce1aa1f039258ce563537",
//                 "id": "670ce1aa1f039258ce563537"
//             }
//         ],
//         "dateCreated": "2024-09-18T02:46:44.870Z",
//         "__v": 0,
//         "id": "66ea3f14c017f4365fafc692"
//     },
//     {
//         "_id": "670771e115f0a6583af1cbc1",
//         "name": "Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen, IPX5 Water Resistance, Heart Rate, SPO2, Upto 7 days battery, Berry Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "images": [
//             "Alt_Lit_Smartwa-1.webp",
//             "Alt_Lit_Smartwa-2.webp"
//         ],
//         "brand": "ALT",
//         "price": 2400,
//         "oldPrice": 2700,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "67415b21f1e1da2b3de3ba8b",
//         "subCat": "Smart Watch Accessories",
//         "subCatName": "Smart Watch Accessories",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a63f63f4ee2e36a03f6ef",
//                 "id": "670a63f63f4ee2e36a03f6ef"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a6f2b150631d6b104798d",
//                 "id": "670a6f2b150631d6b104798d"
//             },
//             {
//                 "value": "AD",
//                 "label": "Andorra",
//                 "_id": "670a6ff4150631d6b104811b",
//                 "id": "670a6ff4150631d6b104811b"
//             }
//         ],
//         "dateCreated": "2024-10-10T06:19:13.027Z",
//         "__v": 0,
//         "id": "670771e115f0a6583af1cbc1"
//     },
//     {
//         "_id": "670a5a647b760ed48b5b6fbe",
//         "name": "Buy New Trend Women Black Cotton Blend Top | top for women | women top | top for women | women top",
//         "description": "For girl's seeking a ethnic set that melds classic charm with a contemporary twist, Trilok Fab flared ethnic gown is a perfect choice. It is designed with both comfort and style in mind, this maxi length gown is made to feel luxurious against the skin. The flowing flares allow for ease of movement, ensuring you feel as good as you look throughout the entire event. Despite the occasion that you want to wear it for, this dress leaves a lasting impression of refined elegance wherever you go.",
//         "images": [
//             "Buy_New_Trend_W-1.jpg",
//             "Buy_New_Trend_W-2.jpg",
//             "Buy_New_Trend_W-3.jpg",
//             "Buy_New_Trend_W-4.jpg"
//         ],
//         "brand": "Trilok Fab",
//         "price": 1500,
//         "oldPrice": 2200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Girls",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 150,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670a5a647b760ed48b5b6fbf",
//                 "id": "670a5a647b760ed48b5b6fbf"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670a5a647b760ed48b5b6fc0",
//                 "id": "670a5a647b760ed48b5b6fc0"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670a5dd47b760ed48b5b7031",
//                 "id": "670a5dd47b760ed48b5b7031"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670ce0cb1f039258ce56336c",
//                 "id": "670ce0cb1f039258ce56336c"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "670ce0cb1f039258ce56336d",
//                 "id": "670ce0cb1f039258ce56336d"
//             }
//         ],
//         "dateCreated": "2024-10-12T11:15:48.297Z",
//         "__v": 0,
//         "id": "670a5a647b760ed48b5b6fbe"
//     },
//     {
//         "_id": "670b4d0961347e5c638f893f",
//         "name": "women red round neck kurta pant set with dupatta",
//         "description": "Save your time mixing and matching various ethnic pieces and invest in beautiful kurta pant set ethnic sets from Ishin brands that give a well-fitted look in all styles.",
//         "images": [
//             "women_red_round-1.webp",
//             "women_red_round-2.jpg",
//             "women_red_round-3.jpg",
//             "women_red_round-4.jpg",
//             "women_red_round-5.jpg",
//             "women_red_round-6.jpg",
//             "women_red_round-7.jpg"
//         ],
//         "brand": "Ishin",
//         "price": 1500,
//         "oldPrice": 1700,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b4d0961347e5c638f8940",
//                 "id": "670b4d0961347e5c638f8940"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b4d0961347e5c638f8941",
//                 "id": "670b4d0961347e5c638f8941"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "670b4d0961347e5c638f8942",
//                 "id": "670b4d0961347e5c638f8942"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b4d0961347e5c638f8943",
//                 "id": "670b4d0961347e5c638f8943"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b4d0961347e5c638f8944",
//                 "id": "670b4d0961347e5c638f8944"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:31:05.278Z",
//         "__v": 0,
//         "id": "670b4d0961347e5c638f893f"
//     },
//     {
//         "_id": "670b52bc61347e5c638f912a",
//         "name": "men checkered long sleeve casual shirt",
//         "description": "Be a head turner by wearing this casual shirt from BUSHIRT and grab it in brown colour.\nShowcase this top in wonderful prints and wear it for different occasions.\nBuy this outstanding collection in a 47 size & get it in fabric made of cotton material.\nBored of the conventional shirt look? Well, these casual shirts in graceful neck designs and long sleeves will give you a whole new dimension!\nLook dapper in casual shirts priced at ₹1199 and benefit 60% .",
//         "images": [
//             "men_checkered_l-1.jpg",
//             "men_checkered_l-2.jpg",
//             "men_checkered_l-3.jpg",
//             "men_checkered_l-4.jpg",
//             "men_checkered_l-5.jpg"
//         ],
//         "brand": "BUSHIRT",
//         "price": 850,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b52bc61347e5c638f912b",
//                 "id": "670b52bc61347e5c638f912b"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b52bc61347e5c638f912c",
//                 "id": "670b52bc61347e5c638f912c"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "670b52bc61347e5c638f912d",
//                 "id": "670b52bc61347e5c638f912d"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670b52bc61347e5c638f912e",
//                 "id": "670b52bc61347e5c638f912e"
//             }
//         ],
//         "dateCreated": "2024-10-13T04:55:24.244Z",
//         "__v": 0,
//         "id": "670b52bc61347e5c638f912a"
//     },
//     {
//         "_id": "670b88d7acc986ed5b012079",
//         "name": "Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set",
//         "description": "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions.",
//         "images": [
//             "Deel_Band_Women-1.webp",
//             "Deel_Band_Women-2.jpg"
//         ],
//         "brand": "Deel band",
//         "price": 1500,
//         "oldPrice": 1800,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1200,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670b88d7acc986ed5b01207a",
//                 "id": "670b88d7acc986ed5b01207a"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670b88d7acc986ed5b01207b",
//                 "id": "670b88d7acc986ed5b01207b"
//             },
//             {
//                 "value": "KE",
//                 "label": "Kenya",
//                 "_id": "670b88d7acc986ed5b01207c",
//                 "id": "670b88d7acc986ed5b01207c"
//             }
//         ],
//         "dateCreated": "2024-10-13T08:46:15.277Z",
//         "__v": 0,
//         "id": "670b88d7acc986ed5b012079"
//     },
//     {
//         "_id": "670bff5ddefdab066b32758b",
//         "name": "GESPO Peach Solid Mandarin Collar Half Sleeve Casual T-Shirt",
//         "description": "Rs: Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasio.\n\n",
//         "images": [
//             "GESPO_Peach_Sol-1.webp",
//             "GESPO_Peach_Sol-2.jpg",
//             "GESPO_Peach_Sol-3.jpg",
//             "GESPO_Peach_Sol-4.webp"
//         ],
//         "brand": "GESPO",
//         "price": 1500,
//         "oldPrice": 2000,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 9,
//         "productRam": [],
//         "size": [
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "670bff5ddefdab066b32758c",
//                 "id": "670bff5ddefdab066b32758c"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "670bff5ddefdab066b32758d",
//                 "id": "670bff5ddefdab066b32758d"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "670bff5ddefdab066b32758e",
//                 "id": "670bff5ddefdab066b32758e"
//             },
//             {
//                 "value": "BD",
//                 "label": "Bangladesh",
//                 "_id": "670bff5ddefdab066b32758f",
//                 "id": "670bff5ddefdab066b32758f"
//             },
//             {
//                 "value": "EC",
//                 "label": "Ecuador",
//                 "_id": "6716dcc3faf0ddf988e78dbc",
//                 "id": "6716dcc3faf0ddf988e78dbc"
//             }
//         ],
//         "dateCreated": "2024-10-13T17:11:57.651Z",
//         "__v": 0,
//         "id": "670bff5ddefdab066b32758b"
//     },
//     {
//         "_id": "6734647d6380d4e40d6484f8",
//         "name": "EYEBOGLER Teal Tshirts/Men tshirt/ tshirt for men/ tshirt/ mens tshirt/ Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "EYEBOGLER_Teal_-1.jpg",
//             "EYEBOGLER_Teal_-2.webp",
//             "EYEBOGLER_Teal_-3.jpg"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 650,
//         "oldPrice": 950,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL",
//             "XXL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6734647d6380d4e40d6484f9",
//                 "id": "6734647d6380d4e40d6484f9"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6734647d6380d4e40d6484fa",
//                 "id": "6734647d6380d4e40d6484fa"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6734647d6380d4e40d6484fb",
//                 "id": "6734647d6380d4e40d6484fb"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "6734647d6380d4e40d6484fc",
//                 "id": "6734647d6380d4e40d6484fc"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "6734647d6380d4e40d6484fd",
//                 "id": "6734647d6380d4e40d6484fd"
//             },
//             {
//                 "value": "US",
//                 "label": "United States",
//                 "_id": "6734647d6380d4e40d6484fe",
//                 "id": "6734647d6380d4e40d6484fe"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:34:05.526Z",
//         "__v": 0,
//         "id": "6734647d6380d4e40d6484f8"
//     },
//     {
//         "_id": "673464ff6380d4e40d64858f",
//         "name": "EYEBOGLER Polo Tshirts for Men | T Shirt For Men | Men T Shirt | Men Tshirt | Tshirt for Men | T Shirts | Tshirts | Oversized Tshirt | Men Tshirt | Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt | Printed Tshirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "EYEBOGLER_Polo_-1.webp",
//             "EYEBOGLER_Polo_-2.webp",
//             "EYEBOGLER_Polo_-3.webp"
//         ],
//         "brand": "EYEBOGLER",
//         "price": 785,
//         "oldPrice": 995,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Western Wear",
//         "thirdsubCatName": "Western Wear",
//         "thirdsubCatId": "673439736380d4e40d647b34",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1500,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673464ff6380d4e40d648590",
//                 "id": "673464ff6380d4e40d648590"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673464ff6380d4e40d648591",
//                 "id": "673464ff6380d4e40d648591"
//             },
//             {
//                 "value": "AL",
//                 "label": "Albania",
//                 "_id": "673464ff6380d4e40d648592",
//                 "id": "673464ff6380d4e40d648592"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673464ff6380d4e40d648593",
//                 "id": "673464ff6380d4e40d648593"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673464ff6380d4e40d648594",
//                 "id": "673464ff6380d4e40d648594"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "673464ff6380d4e40d648595",
//                 "id": "673464ff6380d4e40d648595"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "673464ff6380d4e40d648596",
//                 "id": "673464ff6380d4e40d648596"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:36:15.091Z",
//         "__v": 0,
//         "id": "673464ff6380d4e40d64858f"
//     },
//     {
//         "_id": "673467b76380d4e40d648762",
//         "name": "Men Layerr Regular Fit Spread Collar Cotton Shirt",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Men_Layerr_Regu-1.jpg",
//             "Men_Layerr_Regu-2.jpg",
//             "Men_Layerr_Regu-3.jpg",
//             "Men_Layerr_Regu-4.jpg",
//             "Men_Layerr_Regu-5.jpg"
//         ],
//         "brand": "RARE RABBIT",
//         "price": 950,
//         "oldPrice": 1200,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed528cab231596bf0667d",
//         "subCat": "Men",
//         "subCatName": "Men",
//         "thirdsubCat": "Casual Shirts",
//         "thirdsubCatName": "Casual Shirts",
//         "thirdsubCatId": "673439806380d4e40d647b3a",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 12,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "673467b76380d4e40d648763",
//                 "id": "673467b76380d4e40d648763"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "673467b76380d4e40d648764",
//                 "id": "673467b76380d4e40d648764"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "673467b76380d4e40d648765",
//                 "id": "673467b76380d4e40d648765"
//             },
//             {
//                 "value": "NZ",
//                 "label": "New Zealand",
//                 "_id": "673467b76380d4e40d648766",
//                 "id": "673467b76380d4e40d648766"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "673467b76380d4e40d648767",
//                 "id": "673467b76380d4e40d648767"
//             },
//             {
//                 "value": "VN",
//                 "label": "Vietnam",
//                 "_id": "673467b76380d4e40d648768",
//                 "id": "673467b76380d4e40d648768"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:47:51.822Z",
//         "__v": 0,
//         "id": "673467b76380d4e40d648762"
//     },
//     {
//         "_id": "67346a136380d4e40d648974",
//         "name": "Chikankari Woven Kurta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "Chikankari_Wove-1.webp",
//             "Chikankari_Wove-2.jpg",
//             "Chikankari_Wove-3.jpg",
//             "Chikankari_Wove-4.jpg",
//             "Chikankari_Wove-5.jpg",
//             "Chikankari_Wove-6.jpg",
//             "Chikankari_Wove-7.jpg"
//         ],
//         "brand": "House of Chikankari",
//         "price": 1200,
//         "oldPrice": 1350,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 1455,
//         "rating": 5,
//         "isFeatured": true,
//         "discount": 10,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346a136380d4e40d648975",
//                 "id": "67346a136380d4e40d648975"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346a136380d4e40d648976",
//                 "id": "67346a136380d4e40d648976"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67346a136380d4e40d648977",
//                 "id": "67346a136380d4e40d648977"
//             },
//             {
//                 "value": "ZA",
//                 "label": "South Africa",
//                 "_id": "67346a136380d4e40d648978",
//                 "id": "67346a136380d4e40d648978"
//             }
//         ],
//         "dateCreated": "2024-11-13T08:57:55.488Z",
//         "__v": 0,
//         "id": "67346a136380d4e40d648974"
//     },
//     {
//         "_id": "67346b3c6380d4e40d648b1f",
//         "name": "A-Line Kurti With Sharara & Dupatta",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         "images": [
//             "A-Line_Kurti_Wi-1.jpg",
//             "A-Line_Kurti_Wi-2.jpg",
//             "A-Line_Kurti_Wi-3.jpg",
//             "A-Line_Kurti_Wi-4.jpg"
//         ],
//         "brand": "Sangria",
//         "price": 1300,
//         "oldPrice": 1450,
//         "catName": "Fashion",
//         "catId": "670f544ce86c762e3cad6c8b",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "thirdsubCat": "Kurtas and Suits",
//         "thirdsubCatName": "Kurtas and Suits",
//         "thirdsubCatId": "67343a6b6380d4e40d647b72",
//         "category": {
//             "_id": "670f544ce86c762e3cad6c8b",
//             "name": "Fashion",
//             "slug": "Fashion",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
//             ],
//             "color": "#ecffec",
//             "createdAt": "2024-10-16T05:51:08.266Z",
//             "updatedAt": "2024-11-12T16:16:28.229Z",
//             "__v": 0,
//             "id": "670f544ce86c762e3cad6c8b"
//         },
//         "countInStock": 250,
//         "rating": 5,
//         "isFeatured": false,
//         "discount": 8,
//         "productRam": [],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67346b3c6380d4e40d648b20",
//                 "id": "67346b3c6380d4e40d648b20"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67346b3c6380d4e40d648b21",
//                 "id": "67346b3c6380d4e40d648b21"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67346b3c6380d4e40d648b22",
//                 "id": "67346b3c6380d4e40d648b22"
//             },
//             {
//                 "value": "KR",
//                 "label": "South Korea",
//                 "_id": "67346b3c6380d4e40d648b23",
//                 "id": "67346b3c6380d4e40d648b23"
//             },
//             {
//                 "value": "NG",
//                 "label": "Nigeria",
//                 "_id": "67346b3c6380d4e40d648b24",
//                 "id": "67346b3c6380d4e40d648b24"
//             },
//             {
//                 "value": "PH",
//                 "label": "Philippines",
//                 "_id": "67346b3c6380d4e40d648b25",
//                 "id": "67346b3c6380d4e40d648b25"
//             }
//         ],
//         "dateCreated": "2024-11-13T09:02:52.829Z",
//         "__v": 0,
//         "id": "67346b3c6380d4e40d648b1f"
//     },
//     {
//         "_id": "6741677912b4da68b1670fd0",
//         "name": "Pro360 MOM Pro Nutritional Powder - Swiss Chocolate 200 g",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "Pro360_MOM_Pro_-1.webp"
//         ],
//         "brand": "Pro360",
//         "price": 445,
//         "oldPrice": 345,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 34,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741677912b4da68b1670fd1",
//                 "id": "6741677912b4da68b1670fd1"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741677912b4da68b1670fd2",
//                 "id": "6741677912b4da68b1670fd2"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741677912b4da68b1670fd3",
//                 "id": "6741677912b4da68b1670fd3"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:26:17.758Z",
//         "__v": 0,
//         "id": "6741677912b4da68b1670fd0"
//     },
//     {
//         "_id": "6741686e12b4da68b167150c",
//         "name": "Good Home Air Freshener - Lavender 50 gm",
//         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "Good_Home_Air_F-1.jpg"
//         ],
//         "brand": "Good Home",
//         "price": 78,
//         "oldPrice": 99,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 20,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741686e12b4da68b167150d",
//                 "id": "6741686e12b4da68b167150d"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741686e12b4da68b167150e",
//                 "id": "6741686e12b4da68b167150e"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741686e12b4da68b167150f",
//                 "id": "6741686e12b4da68b167150f"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741686e12b4da68b1671510",
//                 "id": "6741686e12b4da68b1671510"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:30:22.064Z",
//         "__v": 0,
//         "id": "6741686e12b4da68b167150c"
//     },
//     {
//         "_id": "6741697812b4da68b1671728",
//         "name": "Protinex Powder - Rich Chocolate Flavour (Jar) 400 gm",
//         "description": "Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "Protinex_Powder-1.jpg"
//         ],
//         "brand": "Protinex",
//         "price": 549,
//         "oldPrice": 649,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6741697812b4da68b1671729",
//                 "id": "6741697812b4da68b1671729"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6741697812b4da68b167172a",
//                 "id": "6741697812b4da68b167172a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6741697812b4da68b167172b",
//                 "id": "6741697812b4da68b167172b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6741697812b4da68b167172c",
//                 "id": "6741697812b4da68b167172c"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:34:48.245Z",
//         "__v": 0,
//         "id": "6741697812b4da68b1671728"
//     },
//     {
//         "_id": "67416aa212b4da68b1671ac2",
//         "name": "SEBAMED CLEANSING BAR 100gm",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
//         "images": [
//             "SEBAMED_CLEANSI-1.jpg"
//         ],
//         "brand": "Sebamed",
//         "price": 270,
//         "oldPrice": 310,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 14,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "67416aa212b4da68b1671ac3",
//                 "id": "67416aa212b4da68b1671ac3"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "67416aa212b4da68b1671ac4",
//                 "id": "67416aa212b4da68b1671ac4"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "67416aa212b4da68b1671ac5",
//                 "id": "67416aa212b4da68b1671ac5"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "67416aa212b4da68b1671ac6",
//                 "id": "67416aa212b4da68b1671ac6"
//             }
//         ],
//         "dateCreated": "2024-11-23T05:39:46.831Z",
//         "__v": 0,
//         "id": "67416aa212b4da68b1671ac2"
//     },
//     {
//         "_id": "6742b5521b10adfb939ed505",
//         "name": "Dermistry Anti Aging Intense Nourishing Night Repair Cream 50 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Dermistry_Anti_-1.webp"
//         ],
//         "brand": "DERMISTRY",
//         "price": 281,
//         "oldPrice": 233,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b5521b10adfb939ed506",
//                 "id": "6742b5521b10adfb939ed506"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b5521b10adfb939ed507",
//                 "id": "6742b5521b10adfb939ed507"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b5521b10adfb939ed508",
//                 "id": "6742b5521b10adfb939ed508"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b5521b10adfb939ed509",
//                 "id": "6742b5521b10adfb939ed509"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:10:42.028Z",
//         "__v": 0,
//         "id": "6742b5521b10adfb939ed505"
//     },
//     {
//         "_id": "6742b61f1b10adfb939ede1f",
//         "name": "Inlife Super Reds Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Inlife_Super_Re-1.jpg"
//         ],
//         "brand": "Inlife",
//         "price": 999,
//         "oldPrice": 879,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b61f1b10adfb939ede20",
//                 "id": "6742b61f1b10adfb939ede20"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b61f1b10adfb939ede21",
//                 "id": "6742b61f1b10adfb939ede21"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b61f1b10adfb939ede22",
//                 "id": "6742b61f1b10adfb939ede22"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b61f1b10adfb939ede23",
//                 "id": "6742b61f1b10adfb939ede23"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:14:07.452Z",
//         "__v": 0,
//         "id": "6742b61f1b10adfb939ede1f"
//     },
//     {
//         "_id": "6742b72e1b10adfb939ee557",
//         "name": "Inlife Super Greens Powder 200 g",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Inlife_Super_Gr-1.webp"
//         ],
//         "brand": "Inlife",
//         "price": 799,
//         "oldPrice": 899,
//         "catName": "Wellness",
//         "catId": "670fb77905878e94678d8d9a",
//         "subCatId": "",
//         "subCat": "",
//         "subCatName": "",
//         "category": {
//             "_id": "670fb77905878e94678d8d9a",
//             "name": "Wellness",
//             "slug": "Wellness",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
//             ],
//             "color": "#fff3ff",
//             "createdAt": "2024-10-16T12:54:17.493Z",
//             "updatedAt": "2024-11-12T16:14:32.390Z",
//             "__v": 0,
//             "id": "670fb77905878e94678d8d9a"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b72e1b10adfb939ee558",
//                 "id": "6742b72e1b10adfb939ee558"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b72e1b10adfb939ee559",
//                 "id": "6742b72e1b10adfb939ee559"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b72e1b10adfb939ee55a",
//                 "id": "6742b72e1b10adfb939ee55a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b72e1b10adfb939ee55b",
//                 "id": "6742b72e1b10adfb939ee55b"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:18:38.670Z",
//         "__v": 0,
//         "id": "6742b72e1b10adfb939ee557"
//     },
//     {
//         "_id": "6742b8921b10adfb939eeb9e",
//         "name": "Fostelo Women's Meryl Handbag (Maroon) (JM_FSB-1747)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Fostelo_Women's-1.jpg"
//         ],
//         "brand": "FOSTELO",
//         "price": 589,
//         "oldPrice": 455,
//         "catName": "Bags",
//         "catId": "670f5477e86c762e3cad6c9f",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f5477e86c762e3cad6c9f",
//             "name": "Bags",
//             "slug": "Bags",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
//             ],
//             "color": "#fdf0ff",
//             "createdAt": "2024-10-16T05:51:51.640Z",
//             "updatedAt": "2024-11-12T16:16:12.534Z",
//             "__v": 0,
//             "id": "670f5477e86c762e3cad6c9f"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b8921b10adfb939eeb9f",
//                 "id": "6742b8921b10adfb939eeb9f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b8921b10adfb939eeba0",
//                 "id": "6742b8921b10adfb939eeba0"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b8921b10adfb939eeba1",
//                 "id": "6742b8921b10adfb939eeba1"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b8921b10adfb939eeba2",
//                 "id": "6742b8921b10adfb939eeba2"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:24:34.076Z",
//         "__v": 0,
//         "id": "6742b8921b10adfb939eeb9e"
//     },
//     {
//         "_id": "6742b9e71b10adfb939ef25e",
//         "name": "Kerala Naturals Rose Water 100 ml",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Kerala_Naturals-1.jpg"
//         ],
//         "brand": "Kerala Naturals",
//         "price": 119,
//         "oldPrice": 98,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 250,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742b9e71b10adfb939ef25f",
//                 "id": "6742b9e71b10adfb939ef25f"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742b9e71b10adfb939ef260",
//                 "id": "6742b9e71b10adfb939ef260"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742b9e71b10adfb939ef261",
//                 "id": "6742b9e71b10adfb939ef261"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742b9e71b10adfb939ef262",
//                 "id": "6742b9e71b10adfb939ef262"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:30:15.100Z",
//         "__v": 0,
//         "id": "6742b9e71b10adfb939ef25e"
//     },
//     {
//         "_id": "6742baca1b10adfb939efa95",
//         "name": "Dr Batra's Natural Cleansing Milk - Echinacea & Chamomile (Pack of 3 x 100 ml)",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Dr_Batra's_Natu-1.jpg"
//         ],
//         "brand": "Dr Batra'S",
//         "price": 556,
//         "oldPrice": 456,
//         "catName": "Beauty",
//         "catId": "670f54b8e86c762e3cad6cbd",
//         "subCatId": "673ed52fcab231596bf06684",
//         "subCat": "Women",
//         "subCatName": "Women",
//         "category": {
//             "_id": "670f54b8e86c762e3cad6cbd",
//             "name": "Beauty",
//             "slug": "Beauty",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
//             ],
//             "color": "#e3fffa",
//             "createdAt": "2024-10-16T05:52:56.619Z",
//             "updatedAt": "2024-11-18T11:02:10.300Z",
//             "__v": 0,
//             "id": "670f54b8e86c762e3cad6cbd"
//         },
//         "countInStock": 67,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742baca1b10adfb939efa96",
//                 "id": "6742baca1b10adfb939efa96"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742baca1b10adfb939efa97",
//                 "id": "6742baca1b10adfb939efa97"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742baca1b10adfb939efa98",
//                 "id": "6742baca1b10adfb939efa98"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742baca1b10adfb939efa99",
//                 "id": "6742baca1b10adfb939efa99"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:34:02.708Z",
//         "__v": 0,
//         "id": "6742baca1b10adfb939efa95"
//     },
//     {
//         "_id": "6742bcab1b10adfb939f0448",
//         "name": "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)/Octa-core/4GB RAM/64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 grams)/Dual band WiFi + SIM/Blue",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "JioBook_11_with-1.webp"
//         ],
//         "brand": "JIO",
//         "price": 18999,
//         "oldPrice": 15999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 200,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 12,
//         "productRam": [
//             "12GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bcab1b10adfb939f0449",
//                 "id": "6742bcab1b10adfb939f0449"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bcab1b10adfb939f044a",
//                 "id": "6742bcab1b10adfb939f044a"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bcab1b10adfb939f044b",
//                 "id": "6742bcab1b10adfb939f044b"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bcab1b10adfb939f044c",
//                 "id": "6742bcab1b10adfb939f044c"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:42:03.691Z",
//         "__v": 0,
//         "id": "6742bcab1b10adfb939f0448"
//     },
//     {
//         "_id": "6742bd5d1b10adfb939f05d4",
//         "name": "CHUWI Intel Core i5 10th Gen 1035G1 - (16 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "CHUWI_Intel_Cor-1.webp"
//         ],
//         "brand": "CHUWI",
//         "price": 24999,
//         "oldPrice": 25999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed55d2ec02680644f2793",
//         "subCat": "Laptops",
//         "subCatName": "Laptops",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bd5d1b10adfb939f05d5",
//                 "id": "6742bd5d1b10adfb939f05d5"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bd5d1b10adfb939f05d6",
//                 "id": "6742bd5d1b10adfb939f05d6"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bd5d1b10adfb939f05d7",
//                 "id": "6742bd5d1b10adfb939f05d7"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bd5d1b10adfb939f05d8",
//                 "id": "6742bd5d1b10adfb939f05d8"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:45:01.818Z",
//         "__v": 0,
//         "id": "6742bd5d1b10adfb939f05d4"
//     },
//     {
//         "_id": "6742be4b1b10adfb939f09c5",
//         "name": "Oppo K12x 5G 128 GB, 6 GB RAM, Breeze Blue, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Oppo_K12x_5G_12-1.jpg"
//         ],
//         "brand": "OPPO",
//         "price": 14999,
//         "oldPrice": 15888,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 20,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742be4b1b10adfb939f09c6",
//                 "id": "6742be4b1b10adfb939f09c6"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742be4b1b10adfb939f09c7",
//                 "id": "6742be4b1b10adfb939f09c7"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742be4b1b10adfb939f09c8",
//                 "id": "6742be4b1b10adfb939f09c8"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742be4b1b10adfb939f09c9",
//                 "id": "6742be4b1b10adfb939f09c9"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:48:59.859Z",
//         "__v": 0,
//         "id": "6742be4b1b10adfb939f09c5"
//     },
//     {
//         "_id": "6742bf121b10adfb939f0b5d",
//         "name": "Realme Narzo N65 5G 128 GB, 4 GB RAM, Amber Gold, Mobile Phone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
//         "images": [
//             "Realme_Narzo_N6-1.webp",
//             "Realme_Narzo_N6-2.webp"
//         ],
//         "brand": "Realme",
//         "price": 12499,
//         "oldPrice": 11999,
//         "catName": "Electronics",
//         "catId": "670f5463e86c762e3cad6c95",
//         "subCatId": "673ed5552ec02680644f278d",
//         "subCat": "Mobiles",
//         "subCatName": "Mobiles",
//         "category": {
//             "_id": "670f5463e86c762e3cad6c95",
//             "name": "Electronics",
//             "slug": "Electronics",
//             "images": [
//                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
//             ],
//             "color": "#feefea",
//             "createdAt": "2024-10-16T05:51:31.207Z",
//             "updatedAt": "2024-11-12T16:16:20.193Z",
//             "__v": 0,
//             "id": "670f5463e86c762e3cad6c95"
//         },
//         "countInStock": 150,
//         "rating": 4,
//         "isFeatured": false,
//         "discount": 15,
//         "productRam": [
//             "12GB",
//             "16GB"
//         ],
//         "size": [],
//         "productWeight": [],
//         "location": [
//             {
//                 "value": "All",
//                 "label": "All",
//                 "_id": "6742bf121b10adfb939f0b5e",
//                 "id": "6742bf121b10adfb939f0b5e"
//             },
//             {
//                 "value": "IN",
//                 "label": "India",
//                 "_id": "6742bf121b10adfb939f0b5f",
//                 "id": "6742bf121b10adfb939f0b5f"
//             },
//             {
//                 "value": "PK",
//                 "label": "Pakistan",
//                 "_id": "6742bf121b10adfb939f0b60",
//                 "id": "6742bf121b10adfb939f0b60"
//             },
//             {
//                 "value": "AF",
//                 "label": "Afghanistan",
//                 "_id": "6742bf121b10adfb939f0b61",
//                 "id": "6742bf121b10adfb939f0b61"
//             }
//         ],
//         "dateCreated": "2024-11-24T05:52:18.977Z",
//         "__v": 0,
//         "id": "6742bf121b10adfb939f0b5d"
//     }
// ]


// let list = []
// function doSome(products) {              // use to set path = name + index + extension of the images in the products data.
//     products.forEach((i) => {
//         let name = i.name.substring(0, 15).split(' ').join('_');
//         let imagesList = i.images.map((x, n) => `${name}-${n+1}${x}`);
//         i.images = imagesList;
//         list.push(i);
//     })
//     return list;
// }
// console.log(doSome(products_noImage))


// KSC_KHATUSHYAM          same name conflicts.
// Aqualite's_Tren
// Paragon_PUK7014
// Siril_Georgette
// LIVE_FASHION_Bl

// Chikankari_Wove          diplicate images.