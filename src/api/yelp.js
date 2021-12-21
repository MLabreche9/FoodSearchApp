import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer p6n0m6Q1lb5QGu0jUEbb0ITBhezmD8UU8WwQOoZ360Va4Qr1Os6A_lGsVXYZFBvYRIp8CKsEwhvDt46KgmDXEtBSTyKvGn9uftkSscNgnQbjOr3Gggy71gs2bbO6YXYx'
	}
});
