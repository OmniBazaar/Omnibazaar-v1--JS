import createHash from "create-hash";
import createHmac from "create-hmac";

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha1(data, encoding) {
    return createHash('sha1').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha256(data, encoding) {
    return createHash('sha256').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha512(data, encoding) {
    return createHash('sha512').update(data).digest(encoding)
}

function HmacSHA256(buffer, secret) {
    return createHmac('sha256', secret).update(buffer).digest()
}

function ripemd160(data) {
    return createHash('rmd160').update(data).digest()
}

function listingSHA256(listing) {
    const fields = [
        "address",
        "category",
        "city",
        "condition",
        "condition_info",
        "condition_type",
        "continuous",
        "country",
        "currency",
        "description",
        "end_date",
        "images",
        "keywords",
        "listing_title",
        "name",
        "post_code",
        "price",
        "price_using_btc",
        "bitcoin_address",
        "price_using_omnicoin",
        "start_date",
        "state",
        "subcategory",
        "units"
    ];

    const forHash = {...listing};
    Object.keys(forHash).forEach(key => {
        if (!fields.includes(key) || typeof forHash[key] === 'undefinded') {
            delete forHash[key];
        }
    });
    const ordered = {};
    Object.keys(forHash).sort().forEach(function(key) {
        if (key === 'images') {
            if (!forHash.images) {
                ordered.images = [];
            } else {
                ordered.images = forHash.images.map(function (image) {
                    return image.image_name;
                }).sort();
            }
        } else if (key === 'keywords') {
            if (!forHash.keywords) {
                ordered.keywords = [];
            } else {
                ordered.keywords = forHash.keywords.sort();
            }
        } else {
            if (typeof forHash[key] === 'undefined' || forHash[key] === null) {
                ordered[key] = '';
            } else {
                ordered[key] = forHash[key].toString();
            }
        }
    });
    return sha256(JSON.stringify(ordered), 'hex');
};


export { sha1, sha256, sha512, HmacSHA256, ripemd160, listingSHA256 };
