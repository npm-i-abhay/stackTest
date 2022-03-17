window.onload=()=>{//wait for page to load 
    
    var toggle = true // arbitrary variable that changes when a bullet is clicked to unmount the scroll
    
    // bullets and styles 
    var butOne = document.getElementById("butOne")
    var butOneStyle = butOne.style

    var butTwo = document.getElementById("butTwo")
    var butTwoStyle = butTwo.style

    var butThree = document.getElementById("butThree")
    var butThreeStyle = butThree.style


    // options for intersection observer
    const  options = {
        root:null,
        threshold:1
    }

    // intersection observer 
    observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting)//is the element in viewport completely(threshold1)?
            {
                // callback
                window.addEventListener('scroll', () => {
                    if(toggle)//if toggle is true
            
                    {
                        // creating a property for the body '--scroll' that is bounded with window's scroll height.
                        document.body.style.setProperty('--scroll', 
                        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)-0.5);
                        
                        // defining scroll to monitor it
                        var scroll = document.body.style.getPropertyValue('--scroll')

                        // adding dynamic styles to the bullets changing 
                        butOne.style.backgroundColor= scroll>=0 && scroll<0.15?'#242424':null
                        butTwo.style.backgroundColor= scroll>0.15 && scroll<0.4?'#242424':null
                        butThree.style.backgroundColor= scroll>0.41 && scroll<0.52?'#242424':null
                    }
                }, false)
            }
        },)
    },options)
    observer.observe(butOne)//defining what to observe. Bullet1 in this case.
    
    
    butOne.onclick=()=>
    {
        // changing the the background color of the bullet that was clicked on and resetting the others
        butOneStyle.backgroundColor='#242424'
        butTwoStyle.backgroundColor='#ddd'
        butThreeStyle.backgroundColor='#ddd'

        // defining scroll to monitor it
        var scroll = document.body.style.getPropertyValue('--scroll')

        //set toggle to false to unmount scroll
        toggle = false
        temp = scroll

        // setting interval to manually increment the value of scroll
        var inter = setInterval(function()
        {
            temp-= .01
                document.body.style.setProperty('--scroll', temp);
        // stop incrementing once the blob has reached the start of the animation
            if(temp <= 0.01)
            {
                clearInterval(inter)

            }
        },15)
    }

    butTwo.onclick=()=>
    {
        // changing the the background color of the bullet that was clicked on and resetting the others
        butOneStyle.backgroundColor='#ddd'
        butTwoStyle.backgroundColor='#242424'
        butThreeStyle.backgroundColor='#ddd'

        // defining scroll to monitor it
        var scroll = document.body.style.getPropertyValue('--scroll')

        //set toggle to false to unmount scroll
        toggle = false
        var temp = 0

        //if the blob is in the first card
        if(scroll <.5 && scroll >=0 )
        {
            var inter = setInterval(function()
            {
                temp+= .01
                document.body.style.setProperty('--scroll', temp);

            // stop incrementing once the blob has reached the 2nd card/50%of the animation
            if(temp >= .25)
            {
                clearInterval(inter)
            }
            },15)
        };

        //if the blob is in the second card
        if(scroll >.25 && scroll < 1)
        {
            var temp = .5
            var newInter = setInterval(function()
            {
                temp -= 0.01
                document.body.style.setProperty('--scroll', temp);
            // stop decrementing once the blob has reached the 2nd card/50%of the animation
            if(temp <= .30)
            {
                clearInterval(newInter)
            }
            },15)
            
        }
    }
        
        
    butThree.onclick=()=>
    {
        // changing the the background color of the bullet that was clicked on and resetting the others
        butOneStyle.backgroundColor='#ddd'
        butTwoStyle.backgroundColor='#ddd'
        butThreeStyle.backgroundColor='#242424'
        
        // defining scroll to monitor it
        var scroll = document.body.style.getPropertyValue('--scroll')

        // if scroll is greater than 0.1 then temp is .25 else it'll be  0
        var temp = scroll>0.1?.25:0

        //set toggle to false to unmount scroll
        toggle = false
        var inter= setInterval(function()
        {
            // console.log(temp+= .10);
            temp+= .01
            document.body.style.setProperty('--scroll', temp);

        // stop incrementing once the blob has reached the end of the animation
        if(temp >= .5)
        {
            clearInterval(inter)
        }
        
        },15);
    }

}