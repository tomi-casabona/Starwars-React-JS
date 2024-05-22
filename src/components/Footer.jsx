export const Footer = () => {
    return (
        <div className="bottom-0 flex flex-col items-center bg-black py-10">
            <p className="text-white ">More From Star Wars:</p>
            <div className="p-4 flex my-5">
                <ul className="flex gap-4">
                    <li className="max-w-6 hover:scale-110 opacity-75 hover:opacity-100">
                        <a target="_blank" href="https://www.tiktok.com/@starwars">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100" alt="TikTok" />
                        </a>
                    </li>
                    <li className="max-w-6 hover:scale-110 opacity-75 hover:opacity-100">
                        <a target="_blank" href="https://www.instagram.com/starwars/">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="Instagram" />
                        </a>
                    </li>
                    <li className="max-w-6 hover:scale-110 opacity-75 hover:opacity-100">
                        <a target="_blank" href="https://twitter.com/starwars">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="Twitter" />
                        </a>
                    </li>
                    <li className="max-w-6 hover:scale-110 opacity-75 hover:opacity-100">
                        <a target="_blank" href="https://www.facebook.com/StarWars">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="Facebook" />
                        </a>
                    </li>
                    <li className="max-w-6 hover:scale-110 opacity-75 hover:opacity-100">
                        <a target="_blank" href="https://www.youtube.com/user/starwars">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="YouTube" />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="font-normal">Project by <a className="underline hover:no-underline" target="_blank" href="https://github.com/tomi-casabona">Tomás Casabona</a> & <a className="underline hover:no-underline" target="_blank" href="https://github.com/opujade">Oriol Pujade</a></p>
        </div>
    )
}
