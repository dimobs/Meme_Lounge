import { getMyItems } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const profileTemplete = () => html	`
   <!--  <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: Mary</p>
                    <p>Email: mary@abv.bg</p>
                    <p>My memes count: 2</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                <!-- <div class="user-meme">
                    <p class="user-meme-title">Java Script joke</p>
                    <img class="userProfileImage" alt="meme-img" src="/images/1.png">
                    <a class="button" href="#">Details</a>
                </div>  --> 
            
                
                const itemCard = (item) => html`
                <div class="user-meme">
                    <p class="user-meme-title">${item.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
                    <a class="button" href="/details/${item._id}">Details</a>
                </div>`

                <!-- Display : If user doesn't have own memes 
                <p class="no-memes">No memes in database.</p>
            </div>
        </section>` --> 

        export async function profilePage(ctx) {
            const userData = getUserData();
            const items = await getMyItems(userData.id);
            ctx.render(profileTemplete(items))
        }