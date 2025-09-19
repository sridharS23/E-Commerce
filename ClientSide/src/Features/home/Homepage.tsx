import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
   <Box maxWidth='xl' mx='auto' px={4} position='relative'>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' position='relative'>
              <img src="/images/hero1.jpg" alt="Ski store image"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
                zIndex: 0
              }}/>
              <Box 
              display='flex'
              flexDirection='column'
              p={8}
              alignItems='center'
              position='relative'
              borderRadius={4}>
                <Typography
                variant="h1"
                color="white"
                fontWeight='bold'
                textAlign='center'
                sx={{my: 3}}>
                  Welcome to our Store!
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to='/catalog'
                  sx={{mt: 8,
                      backgroundImage: 'linear-gradient(to right, #2563eb,#647cff)',
                      fontWeight: 'bold',
                      color:'white',
                      borderRadius: '16px',
                      px: 8,
                      py: 2,
                      border: '2px solid transparent'
                  }}
                >Explore Now!</Button>
              </Box>
      </Box>
      <p>
        <b>Ski Shop – Where Adventure Meets the Slopes</b>
        <br/>
        <br/>

          At Ski Shop, we believe that skiing is more than just a sport—it’s a lifestyle, a passion, and a gateway to unforgettable adventures in the mountains. Nestled at the heart of the outdoor community, our store has become a trusted destination for skiers, snowboarders, and winter enthusiasts of all levels. Whether you’re preparing for your very first run down the bunny slopes or gearing up for a challenging backcountry expedition, Ski Shop is here to equip you with the right gear, clothing, and guidance to make every trip to the snow memorable.

From day one, our mission has been simple: to provide skiers with the highest-quality equipment, expert advice, and personalized service that goes beyond the ordinary. We know that every skier is different—some chase adrenaline on steep descents, others savor the quiet beauty of cross-country trails, and many enjoy the social fun of family ski trips. At Ski Shop, we embrace all styles and skill levels. That’s why our collection is carefully curated to offer something for everyone, combining performance, durability, and style.<br/>
<br/>

<b>Our Product Range</b>

Step inside Ski Shop, and you’ll find a wide variety of products designed to meet the needs of every winter athlete. Our shelves are stocked with high-performance skis and snowboards from leading brands known for their innovation and reliability. We also carry boots, bindings, and poles that ensure safety and comfort, no matter how challenging the terrain. For those who prioritize protection, our helmets and goggles are built with advanced technology to keep you safe without compromising on style.

Of course, no ski trip is complete without proper clothing. Our apparel section features ski jackets, pants, gloves, thermal wear, and accessories that balance warmth, waterproofing, and breathability. We understand that staying comfortable on the slopes is just as important as looking good, which is why we only stock apparel that meets the demands of cold, unpredictable weather while offering modern designs you’ll love to wear. From head to toe, Ski Shop has you covered.<br/>
<br/>


<b>More Than Just Gear</b>

What sets Ski Shop apart from ordinary sporting goods stores is our commitment to community and expertise. Our staff members aren’t just salespeople—they’re passionate skiers and snowboarders themselves. They’ve experienced the thrill of fresh powder, the challenge of icy slopes, and the joy of teaching beginners. This first-hand experience allows them to offer genuine advice, whether you need help choosing the right pair of skis, adjusting your bindings, or finding clothing that suits your activity level.

We believe that shopping for ski equipment shouldn’t feel overwhelming. Instead, it should feel like preparing for an adventure. That’s why we take the time to listen, understand your goals, and recommend the best products for your unique needs. Many of our customers return year after year not just for the gear, but for the relationships they’ve built with our team.<br/>
<br/>


<b>Services That Go the Extra Mile</b>

In addition to our extensive product range, Ski Shop also provides a range of services to ensure your gear performs at its best. Our professional ski and snowboard technicians are available for equipment tuning, waxing, and repairs. Properly maintained equipment not only enhances performance but also extends the lifespan of your gear, saving you money in the long run.

We also offer personalized boot fitting, ensuring that every skier enjoys maximum comfort and control. Ill-fitting boots can ruin an otherwise perfect day on the mountain, so our experts use precise fitting techniques to help you find the right size and shape for your feet. This attention to detail has made Ski Shop a trusted choice among serious skiers who know that small adjustments make a big difference.<br/>
<br/>
<b>A Hub for Ski Enthusiasts</b>

Ski Shop is more than just a retail space—it’s a hub for the ski community. We regularly host events, workshops, and product demonstrations where enthusiasts can come together, share experiences, and learn from one another. Whether it’s a clinic on avalanche safety, a workshop on ski maintenance, or a meet-and-greet with professional athletes, we’re proud to create opportunities for our community to grow stronger.

Our passion for skiing extends beyond the store as well. We actively support local ski clubs, sponsor mountain events, and encourage young athletes who are just discovering their love for the snow. We see ourselves not just as a store, but as a partner in your journey—whether you’re chasing medals, adventure, or simply fun with family and friends.<br/>
<br/>

<b>Our Promise</b>

At Ski Shop, we promise to deliver quality, expertise, and passion in everything we do. We stand behind every product we sell, ensuring that it meets the highest standards of performance and durability. Our goal isn’t just to make a sale, but to help you create lasting memories on the mountain. Every item you purchase, every service we provide, and every piece of advice we give is rooted in our dedication to your skiing experience.

So whether you’re carving turns on freshly groomed slopes, venturing into deep powder, or teaching your kids how to ski for the first time, Ski Shop is here to be your trusted companion. With our wide selection of gear, friendly experts, and commitment to the ski lifestyle, we make sure you’re always ready for the mountains.
      </p>
   </Box>
   
  )
}
