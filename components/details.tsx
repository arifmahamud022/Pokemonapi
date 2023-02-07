import detailstyle from './details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function details () {
    return(
        <>
        <div className={detailstyle.logo}>
            <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675584508/Logo_zbzm27.png" alt="" className={detailstyle.logostyle}/>
        </div>
        <div className={detailstyle.content}>
            <div className={detailstyle.itema}>
                <div className={detailstyle.name}>
                    <h1>Bhulbasur  #001</h1>
                    
                </div>
                <div className={detailstyle.description}>
                    <p>There is a planet seed on it's back right from the <br/> day this Pokemon born .The seed slowly <br/> grows larger</p>

                </div>

                <div className={detailstyle.card}>
                    <div className={detailstyle.carditem}>
                        <div className={detailstyle.height}>
                            <h1>Height</h1>
                            <p>2' 04"</p>
                        </div>
                        <div className={detailstyle.weight}>
                        <h1>Weight</h1>
                            <p>15.2 lbs</p>
                        </div>
                    </div>
                    <div className="carditm">
                    <div className={detailstyle.category}>
                            <h1>Category</h1>
                            <p>Seed</p>
                        </div>
                        <div className={detailstyle.ability}>
                        <h1>Ability</h1>
                            <p>Overgrow</p>
                            <p>Blaze</p>
                        </div>
                    </div>

                </div>
                </div>
            <div className={detailstyle.itemb}>
                <div className="image">
                    <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675588973/ivysaur_nfkvzg.png" alt="" />
                </div>
            </div>
            <div className={detailstyle.itemc}>
                <div className={detailstyle.type}>
                    <h1>Type</h1>
                    <button className={detailstyle.buttona}>Grass</button> <button className={detailstyle.buttonb}>Poision</button>

                </div>
                <div className={detailstyle.weakness}>
                <h1>Weakness</h1>
                    <button className={detailstyle.buttonc}>Fire</button> <button className={detailstyle.buttond}>Psyscis</button> <button className={detailstyle.buttone}>Flying</button> <button className={detailstyle.buttonf}>Ice</button>


                </div>

                <div className={detailstyle.stats}>
                    <h1 className={detailstyle.stat}>Stats</h1>
                    <div className={detailstyle.right}>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>HP</span>
                            </div>
                            <div className={detailstyle.bars} >
                                <div className={detailstyle.hp}>

                                </div>

                            </div>
                        </div>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>Attack</span>
                            </div>
                            <div className={detailstyle.bars}>
                            <div className={detailstyle.attack}>
                                    
                                    </div>

                            </div>
                        </div>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>Defence</span>
                            </div>
                            <div className={detailstyle.bars}>
                            <div className={detailstyle.defence}>
                                    
                                    </div>

                            </div>
                        </div>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>Special Attack</span>
                            </div>
                            <div className={detailstyle.bars}>
                            <div className={detailstyle.specialattack}>
                                    
                                    </div>

                            </div>
                        </div>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>Special Defence</span>
                            </div>
                            <div className={detailstyle.bars}>
                            <div className={detailstyle.specialdefence}>
                                    
                                    </div>

                            </div>
                        </div>
                        <div className={detailstyle.line}>
                            <div className={detailstyle.info}>
                                <span>Speed</span>
                            </div>
                            <div className={detailstyle.bars}>
                            <div className={detailstyle.speed}>
                                    
                                    </div>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        <Link href="/">
        <div className={detailstyle.homebutton}>
            <div className={detailstyle.homebtn}>
                <span><FontAwesomeIcon icon={faHome} /><p className='text-center'>Back to Homepage</p></span> 
            </div>
        </div>
        </Link>
        </>
    )
}