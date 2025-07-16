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
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brands' },
    price: Number,
    oldPrice: Number,
    catName: String,
    catId: String,
    subCatId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
    subCat: String,
    subCatName: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    countInStock: Number,
    rating: Number,
    isFeatured: Boolean,
    discount: Number,
    productRam: [String],
    size: [String],
    productWeight: [String],
    location: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locations' }],
    dateCreated: String,
    updatedAt: String,
});

productsSchema.plugin(mongoosePaginate);

// export const Products = mongoose.models.ProductsSchema || mongoose.model("ProductsSchema", ProductsSchema, 'products');

const brandSchema = new Schema({   
    id: { type: String },
    name: { type: String },
});

const locationSchema = new Schema({   
    id: String,
    value: String,
    label: String,
});

const userSchema = new Schema({   
    id: String,
    name: String,
    phone: String,
    email: String,
    password: String,
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    avatar: String
});

const addressSchema = new Schema({   
    id: String,
    addressLine: String,
    city: String,
    state: String,
    pin: String,
});

const orderSchema = new Schema({  
    id: String, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderDate: Date,
    paymentMethod: String,
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    orderTotal: Number,
    products: [
        { qty: Number, rate: Number, total: Number, id: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' } }
    ],
    note: String,
    delivery: {deliveryType: String, charge: Number}
});


export const HomeBanner = mongoose.models.HomeBanner || mongoose.model("HomeBanner", homeBannersSchema, 'homeBanner');
export const HomeBottomBanners = mongoose.models.HomeBottomBanners || mongoose.model("HomeBottomBanners", homeBottomBannersSchema, 'homeBottomBanners');
export const HomeSideBanners = mongoose.models.HomeSideBanners || mongoose.model("HomeSideBanners", homeSideBannersSchema, 'homeSideBanners');
export const Banners = mongoose.models.Banners || mongoose.model("Banners", bannersSchema, 'banners');
export const SubCategory = mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema, 'subCategory');
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema, 'category');
export const Products = mongoose.models.Products || mongoose.model("Products", productsSchema, 'products');
export const Brands = mongoose.models.Brands || mongoose.model("Brands", brandSchema, 'brands');
export const Locations = mongoose.models.Locations || mongoose.model("Locations", locationSchema, 'locations');

export const User = mongoose.models.User || mongoose.model("User", userSchema, 'users');
export const Address = mongoose.models.Address || mongoose.model("Address", addressSchema, 'addresses');
export const Orders = mongoose.models.Orders || mongoose.model("Orders", orderSchema, 'orders');


const appointmentSchema = new Schema({   
    selectedAppnDate: String,
    Doctor: {
        PartyId: Number,
        Name: String
    },
    UnderDoctId: Number,
    AppointDate: String,
    AppTime: String,
    Name: String,
    EncCompanyId: String,
    RegMob1: String,
    GenderDesc: String,
    Address: String,
    UserId: Number,
    UserPassword: String
});

appointmentSchema.plugin(mongoosePaginate);

export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema, 'appointment');


const subjectSchema = new Schema({   
    id: String,
    heading: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const chaptersSchema = new Schema({   
    id: String,
    heading: String,
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subjects', required: true },
});

const questionSchema = new Schema({   
    id: String,
    title: String,
    answer: String,
    explain: String,
    options: [{ key: String, content: String }],
    chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapters', required: true }
});

export const Subjects = mongoose.models.Subjects || mongoose.model("Subjects", subjectSchema, 'subjects');
export const Questions = mongoose.models.Questions || mongoose.model("Questions", questionSchema, 'questions');
export const Chapters = mongoose.models.Chapters || mongoose.model("Chapters", chaptersSchema, 'chapters');



