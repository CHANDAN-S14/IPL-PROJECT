import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function News() {
let newsdata = [
    {
        "story": {
            "id": 139009,
            "hline": "Tim David suspended for first match of IPL 2027 after breaching Code of Conduct",
            "intro": "The RCB batter was fined 50 per cent of his match fee for aggressively hurling an ice bag in umpire Nitin Menon's direction",
            "pubTime": "1780328425211",
            "source": "Cricbuzz",
            "storyType": "News",
            "imageId": 1002800,
            "seoHeadline": "Tim David fined, banned for first match of next IPL season after hurling ice bag at umpire Nitin Menon",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002800",
                "caption": "Tim David accumulated five demerit points over the course of IPL 2026",
                "source": "BCCI/IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "ad": {
            "name": "native_news_index",
            "layout": "native_large",
            "position": 1
        }
    },
    {
        "story": {
            "id": 139008,
            "hline": "Uncertainty to clarity: When winning became the standard at RCB",
            "intro": "\nRCB's second successive title was secured with a level of authority that stood in contrast to the uncertainty that surrounded their maiden triumph last edition",
            "pubTime": "1780320713309",
            "source": "Cricbuzz",
            "storyType": "Features",
            "imageId": 1002794,
            "seoHeadline": "Uncertainty to clarity: When winning became the standard at RCB IPL 2026",
            "context": "IPL 2026 ",
            "coverImage": {
                "id": "1002794",
                "caption": "RCB became only the third franchise to defend their IPL crown.",
                "source": "AFP"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 139007,
            "hline": "CSK in 2026: A season of stagnation amid flickers of hope",
            "intro": "Injuries didn't help but inconsistency added to their woes in another disappointing campaign",
            "pubTime": "1780318593089",
            "source": "Cricbuzz",
            "storyType": "Features",
            "imageId": 1002793,
            "seoHeadline": "CSK in 2026: A season of stagnation amid flickers of hope",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002793",
                "caption": "Sanju Samson delivered in his maiden season, but skipper Ruturaj Gaikwad was off colour",
                "source": "IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 139006,
            "hline": "Lucknow Super Giants - A season of missteps that ended in a fall ",
            "intro": "LSG slipped to the bottom of the table early in the season and never really recovered, finishing last.",
            "pubTime": "1780315464351",
            "source": "Cricbuzz",
            "storyType": "Features",
            "imageId": 1002790,
            "seoHeadline": "IPL 2026 Lucknow Super Giants - A season of missteps that ended in a fall",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002790",
                "caption": "LSG won only four out of 14 games this season",
                "source": "IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "ad": {
            "name": "native_news_index_2",
            "layout": "native_large",
            "position": 5
        }
    },
    {
        "story": {
            "id": 139003,
            "hline": "KKR in IPL 2026: A season of recoveries, regrets and what-ifs",
            "intro": "Winless after their first six games, KKR made an inspiring comeback but failed to break into the top four",
            "pubTime": "1780305429904",
            "source": "Cricbuzz",
            "storyType": "Features",
            "imageId": 1002786,
            "seoHeadline": "KKR team review in IPL 2026: A season of recoveries, regrets and what-ifs",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002786",
                "caption": "A season of what-ifs for KKR",
                "source": "BCCI/IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 139002,
            "hline": "Bigger lifts, leaner frame: The story behind Bhuvneshwar Kumar's age-defying IPL season",
            "intro": "Three years ago, injuries and declining returns appeared to have pushed Bhuvneshwar Kumar towards the twilight of his career. Through relentless discipline, strength training and technical tweaks, he has engineered one of the IPL's most remarkable revivals",
            "pubTime": "1780300537693",
            "source": "Cricbuzz",
            "storyType": "Features",
            "imageId": 1002780,
            "seoHeadline": "Inside Bhuvneshwar Kumar's fitness transformation and IPL comeback",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002780",
                "caption": "Bhuvneshwar finished the season with 28 wickets",
                "source": "BCCI/IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 139000,
            "hline": "IPL Pulse: See you soon",
            "intro": "Your (final) 2-minute morning scan of the IPL universe",
            "pubTime": "1780294698414",
            "source": "Cricbuzz",
            "storyType": "Pulse",
            "imageId": 1002778,
            "seoHeadline": "IPL Pulse: See you soon",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002778",
                "caption": "A Virat Kohli special in the final indeed happened",
                "source": "IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 138998,
            "hline": "RCB and the luxury of another option",
            "intro": "From replacing Yash Dayal to filling in for Phil Salt and Jacob Bethell, Rasikh Salam and Venkatesh Iyer became crucial pieces of RCB's title defence",
            "pubTime": "1780285293746",
            "source": "Cricbuzz",
            "storyType": "Match Features",
            "imageId": 1002764,
            "seoHeadline": "IPL 2026: Rasikh Dar, Venkatesh Iyer and the luxury of options for RCB",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002764",
                "caption": "Rasikh Dar and Venkatesh Iyer played vital supporting roles ",
                "source": "BCCI/IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 138997,
            "hline": "'Can't control the weather' - Solanki refuses to blame logistics for defeat in final",
            "intro": "Delayed by rain and storms, GT reached Ahmedabad at 10pm the night before the final",
            "pubTime": "1780277569359",
            "source": "Cricbuzz",
            "storyType": "News",
            "imageId": 1002763,
            "seoHeadline": "'Can't control the weather' - Solanki refuses to blame logistics for defeat in final",
            "context": "IPL 2026 ",
            "coverImage": {
                "id": "1002763",
                "caption": "The Titans played the final less than 24 hours after landing in Ahmedabad",
                "source": "IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    },
    {
        "story": {
            "id": 138996,
            "hline": "How GT were bounced out",
            "intro": "A barrage of short-pitched bowling, early wickets and a decisive Powerplay ensured Gujarat Titans never truly entered the contest",
            "pubTime": "1780275578655",
            "source": "Cricbuzz",
            "storyType": "Match Features",
            "imageId": 1002762,
            "seoHeadline": "How GT were bounced out",
            "context": "IPL 2026",
            "coverImage": {
                "id": "1002762",
                "caption": "GT lost six wickets to short balls",
                "source": "BCCI/IPL"
            },
            "entitlements": {},
            "adsType": {}
        }
    }
]
let filternewsdata=newsdata.filter((data)=>data["story"])
let[news,setnews]=useState(filternewsdata)
// console.log(news);







//     async function fetchnews(params) {
//         const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/series/9241';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '0417509918msh392d78dd5c847cfp12f661jsnd6bf3996b85a',
// 		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result.storyList);
// } catch (error) {
// 	console.error(error);
// }
//     }
//     fetchnews()
    
  return (
    <div  className=' w-[50%] bg-[#22242A] text-white flex flex-col gap-5 p-6'>
      {news.map((news,i)=>{
       return(
        <div>
           
            <h1>[{i+1}]</h1>
            <h1 className='text-[20px]'>{news.story.intro}</h1>
            <h1>{news.story.hline}</h1>
            <p>{news.story.seoHeadline}</p>
        </div>
       )
        
      })}
    </div>
  )
}

export default News
