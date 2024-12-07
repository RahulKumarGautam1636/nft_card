import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const homeBannersSchema = new Schema({
    id: String,
    images: [ String ]
});

// export const HomeBanner = mongoose.models.HomeBannersSchema || mongoose.model("HomeBannersSchema", HomeBannersSchema, 'homeBanners');

const homeBottomBannersSchema = new Schema({
    id: String,
    images: [ String ],
    catId: String,
    catName: String,
    subCatId: String,
    subCatName: String,
});

const bannersSchema = new Schema({
    id: String,
    images: [ String ],
    catId: String,
    catName: String,
    subCatId: String,
    subCatName: String
});

const homeSideBannersSchema = new Schema({
    id: String,
    images: [ String ],
    "catId": String,
    "catName": String,
    "subCatId": String,
    "subCatName": String
});

// export const Banners = mongoose.models.BannersSchema || mongoose.model("BannersSchema", BannersSchema, 'banners');


const subCategorySchema = new Schema({   
    id: String,  
    name: String,
    images: [ String ],
    slug: String,
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    children: []
});

// export const SubCategory = mongoose.models.SubCategorySchema || mongoose.model("SubCategorySchema", SubCategorySchema, 'subCategory');

const categorySchema = new Schema({   
    id: String, 
    name: String,
    images: [ String ],
    color: String,
    slug: String,
    children: []        // { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: true }
});

// export const Category = mongoose.models.CategorySchema || mongoose.model("CategorySchema", CategorySchema, 'category');


const productsSchema = new Schema({   
    
    id: String,
    name: String,
    description: String,
    images: [String],
    brand: String,
    price: Number,
    oldPrice: Number,
    catName: String,
    catId: String,
    subCatId: String,
    subCat: String,
    subCatName: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    countInStock: Number,
    rating: Number,
    isFeatured: Boolean,
    discount: Number,
    productRam: [],
    size: [String],
    productWeight: [],
    location: [],
    dateCreated: String,
    updatedAt: String,
});

productsSchema.plugin(mongoosePaginate);

// export const Products = mongoose.models.ProductsSchema || mongoose.model("ProductsSchema", ProductsSchema, 'products');

const brandSchema = new Schema({   
    id: { type: String },
    name: { type: String },
});


export const HomeBanner = mongoose.models.HomeBanner || mongoose.model("HomeBanner", homeBannersSchema, 'homeBanner');
export const HomeBottomBanners = mongoose.models.HomeBottomBanners || mongoose.model("HomeBottomBanners", homeBottomBannersSchema, 'homeBottomBanners');
export const HomeSideBanners = mongoose.models.HomeSideBanners || mongoose.model("HomeSideBanners", homeSideBannersSchema, 'homeSideBanners');
export const Banners = mongoose.models.Banners || mongoose.model("Banners", bannersSchema, 'banners');
export const SubCategory = mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema, 'subCategory');
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema, 'category');
export const Products = mongoose.models.Products || mongoose.model("Products", productsSchema, 'products');
export const Brands = mongoose.models.Brands || mongoose.model("Brands", brandSchema, 'brands');