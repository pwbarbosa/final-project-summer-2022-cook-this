export default function balancedFlavorsView(videoId) {
    if(videoId==2){
    return `
        <section class="right-page " id="tutorial-page">
            <div id="balanced-flavors">
                <h2 class="text-center">Balance of Flavors in Your Cooking</h2>
                <br>
                <section class="video-flex">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S-flQSEgdWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br>
                    <div id="video-text" class="text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus sit molestias veniam recusandae, illum asperiores vitae doloremque nesciunt, inventore in iusto at provident perspiciatis nemo. Temporibus numquam omnis nesciunt.
                            <br> <br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum quas possimus commodi inventore nam recusandae perferendis quod tempora voluptas blanditiis vero! Aut blanditiis maiores veniam tempora nisi, repellat dolores.<br>
                            <a href="#"> -Website to be linked?-</a>
                        </p>
                    </div>
                </section>
            </div>
        </section>
    `
    }


}