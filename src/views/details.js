import { getbyId } from '../api/data.js';
import { html } from '../lib.js';

const detailsTemplete = () =>html`<h1>Hello!</h1>`

        export async function detailsPage(ctx) {
const meme = await getbyId(ctx.params.id);
            ctx.render(detailsTemplete());
        }