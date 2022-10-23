import { getbyId } from '../api/data.js';
import { html } from '../lib.js';

const detailsTemplete = (meme) => html	`
        <section id="meme-details">
            <h1>Meme Title:${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    <a class="button warning" href="/edit">Edit</a>
                    <button class="button danger">Delete</button>
                    
                </div>
            </div>
        </section>`

        export async function detailsPage(ctx) {
const meme = await getbyId(ctx.params.id);
            ctx.render(detailsTemplete(meme))
        }