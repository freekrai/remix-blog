import { initSeo } from "remix-seo";
export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
	// Pass any SEO defaults for your site here.
	// If individual routes do not provide their own meta and link tags,
	// the tags generated by the defaults will be used.
	title: "The Awesome Store",
	titleTemplate: "%s | The Awesome Store",
	description: "The most awesome store on planet Earth.",
});