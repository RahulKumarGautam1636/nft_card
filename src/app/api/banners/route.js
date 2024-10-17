// var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// app.get('/banners', (req, res) => {
//     var banners = data.banners;
//     res.json(banners);
// })

// app.get('/homeBanners', (req, res) => {
//     var homeBanners = data.homeBanners;
//     res.json(homeBanners);
// })

// app.get('/homeSideBanners', (req, res) => {
//     var homeSideBanners = data.homeSideBanners;
//     res.json(homeSideBanners);
// })

// app.get('/homeBottomBanners', (req, res) => {
//     var homeBottomBanners = data.homeBottomBanners;
//     res.json(homeBottomBanners);
// })


// app.get('/addBanners', (req, res) => {
//     let allData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
//     let id = uniqueId({ length: 24 });
//     let newBanner = {
//         id: id,
//         images: [ "no image" ],
//         catId: "66c0d705430f507021d32294",
//         catName: "New Category Item",
//         subCatId: null,
//         subCatName: null
//     }
//     allData.banners.push(newBanner);
//     fs.writeFile('db.json', JSON.stringify(allData), 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err);
//         } else {
//             res.send(JSON.stringify(newBanner));
//         }
//     });
// })