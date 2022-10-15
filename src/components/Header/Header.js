import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import {
    MdLocalHotel
} from 'react-icons/md';
import style from './Header.module.scss';

function Header({type}) {
    const [openDate, setOpenDate] = useState(false)
    const [openOption, setOpenOption] = useState(false)
    const [city, setCity] = useState('')
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);



    const handleBtn = (name, operation) => {
        setOptions((prev) => ({
                ...prev,
                [name]: operation === "i" ? options[name] + 1 :  options[name] - 1
            }))
    }

    const handleCalender = () => {
        setOpenDate(!openDate)
        setOpenOption(false)
    }

    const handleRoomss = () => {
        setOpenOption(!openOption)
        setOpenDate(false)
    }

 
    


    return (
        <div className={style.header}>
            <div className={style.header_main}>
                {type !== "hList" && (
                    <>
                        
                    <h1 >Travelling made fun with cashbacks💸 and superfluid🌊</h1>
                    <p className={style.username}>
                    ✈TravelFluidly🌫
                    </p>

                   
                        
                   
            
                    {/* {user ? (
                        <div className={style.username}>Welcome <b> {user.username ? user.username : user.fullname}</b></div>
                    ) : (
                        <Link href="login">
                            <button className={style.reg_btn} type="button">
                                Sign In / Register
                            </button>
                        </Link>
                )} */}

                {/* header search */}
                    <div className={style.header_search}>
                            <div className={style.header_search_item}>
                                <MdLocalHotel className={style.header_search_icon_first} />
                                <input
                                    type="text"
                                    placeholder="Headout , Banglore, India"
                                    className={style.searc_inp}
                                    value={city?.toLowerCase()}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div className={style.header_search_item}>
                                <FaCalendarAlt className={style.header_search_icon} />
                                <span onClick={handleCalender} className={style.header_search_date}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                    {openDate && <DateRange
                                        editableDateInputs
                                        onChange={item => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className={style.header_search_calender}
                                        minDate={new Date()}
                                    />}
                            </div>

                            <div className={style.header_search_item}>
                                <FaUserFriends className={style.header_search_icon_first} />
                                <span className={style.header_search_date} onClick={handleRoomss}>{`${options.adult} adult ${options.children} children ${options.rooms} room `}</span>
                            {openOption && <div className={style.search_options}>
                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Adult</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("adult", "d")} disabled={options.adult <= 1}>-</button>
                                        <span className={style.option_txt_num}>{options.adult}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("adult", "i")}>+</button>
                                    </div>
                                </div>

                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Children</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("children", "d")} disabled={options.children <= 0}>-</button>
                                        <span className={style.option_txt_num}>{options.children}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("children", "i")}>+</button>
                                    </div>
                                </div>

                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Room</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("rooms", "d")} disabled={options.rooms <= 1}>-</button>
                                        <span className={style.option_txt_num}>{options.rooms}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("rooms", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}

                            </div>

                            <div className={style.header_search_item}>
                                <button className={style.header_search_btn} type="button">Search</button>
                            </div>
                        </div>

                </>
                )}
            </div>
        </div>
    );
}

export default Header;
