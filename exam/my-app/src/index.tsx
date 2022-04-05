//1--------------------------------------------
/*
export  const Wrapper  = () => {
    return <User city="minsk" />
}
type PropsType = {
    city: string
}
export const User: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

*/
/*
import ReactDOM from 'react-dom'

export const YoutubeVideo = () => {
    return <div>
        <VideoHeader />
        <VideoContent />
        <VideoStatistics />
    </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div><YoutubeVideo/></div>,
    document.getElementById('root')
);*/
/*

type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Имя: {props.name}</h1>
        //<div>Описание: {props.description}</div>
    </div>
}

//Что нужно написать вместо ххх, что бы код работал?

*/
/*
type PropsType = {
    city: string
    country: string
    coords?: string
}
// 'belarus', 'minsk', '53.917501,27.604851'
export const Wrapper1 = () => {
    return <PropsComponent1 city='minsk' country='belarus'/>
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

*/

// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={123} n={'hello'} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
/*

type NewsType = {
    title: string
    author: string
}
type ArticleType = {
    title: string
    date: Date
    text: string
}
type PagePropsType = {
    news: NewsType[]
    mainArticle: ArticleType
}
export const Page: React.FC<PagePropsType> = (props) => {
    return <div>
        <article>
            <h1>Название: {props.XXX.title}</h1>
            {props.XXX.date}
            <div>{props.XXX.date}</div>
            <div>{props.XXX.text}</div>
        </article>
        <aside>Articles:
            <ul>
                {props.YYY.map(n => <li>{n.title}, {n.author}</li>)}
            </ul>
        </aside>
    </div>
}
*/
/*

type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100}
    ]

    return <div>
        <UserWallet wallet={UserMoney(wallets[0])} />
        <UserWallet wallet={UserMoney(wallets[1])} />
    </div>
}

*/
/*

import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

    const style = {
        color: props.fontColor,
        backgroundColor: props.bgColor
    }

    return <button style={style}>
        {props.title}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)
*/

import ReactDOM from 'react-dom'

const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}


const Father = (props: any) => {
    return <div>
        I am father. My name is {props.name}
        <Son name={props.sonName} />
    </div>
}

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName} />
    </div>
}

export const App = () => {
    return <div>
        <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)














// //2
// ?
// //Что нужно написать вместо ххх, чтобы на экране увидеть:
// //😀 Заголовок видео
// //📼 Контент видео
// //📊 Статистика лайков
// ///3--------------------------------------------------------------------
//
// //     type UserPropsType = {
// //         name: string
// //         description: string
// //     }
// // export const User: React.FC<UserPropsType> = (props) => {
// //     return <div>
// //         <h1>Имя: {props.name}</h1>
// //         //<div>Описание: {props.description}</div>
// //     </div>
// // }
// //4-----------------------------------
// //
// //     type PropsType = {
// //         city: string
// //         country: string
// //         coords?: string
// //     }
// // // 'belarus', 'minsk', '53.917501,27.604851'
// // export const Wrapper1 = () => {
// //     return <PropsComponent1 city='minsk'/>
// // }
// //
// // export const PropsComponent1: React.FC<PropsType> = (props) => {
// //     return <div>hello</div>
// // }
//
// //Что нужно написать вместо ххх, что бы код работал?
//
//
// // type PagePropsType = {
// //     age: number
// //     name: string
// //     avatarUrl: string
// // }
// // const Page: React.FC<PagePropsType> = (props) => {
// //     return <User a={123} n={'yyy'} />
// // }
// // type UserPropsType = {
// //     a: number
// //     n: string
// // }
// // export const User: React.FC<UserPropsType> = (props) => {
// //     return <div>name: {props.n}, age: {props.a}</div>
// // }
// //
// //
// // type NewsType = {
// //     title: string
// //     author: string
// // }
// // type ArticleType = {
// //     title: string
// //     date: Date
// //     text: string
// // }
// // type PagePropsType = {
// //     news: NewsType[]
// //     mainArticle: ArticleType
// // }
// // export const Page: React.FC<PagePropsType> = (props) => {
// //     return <div>
// //         <article>
// //             <h1>Название: {props.mainArticle.title}</h1>
// //             {props.mainArticle.date}
// //             <div>{props.mainArticle.date}</div>
// //             <div>{props.mainArticle.text}</div>
// //         </article>
// //         <aside>Articles:
// //             <ul>
// //                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
// //             </ul>
// //         </aside>
// //     </div>
// // }
//
// // type UserWalletType = {
// //     title: string
// //     amount: number
// // }
// // type UserWalletPropsType = {
// //     wallet: UserWalletType
// // }
// //
// // export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
// //     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// // }
// //
// // export const UserMoney = () => {
// //     const wallets = [
// //         {title: 'bitcoin', amount: 1},
// //         {title: '$', amount: 100}
// //     ]
// //
// //     return <div>
// //         <UserWallet wallet={UserWallet} />
// //         <UserWallet wallet={UserWallet} />
// //     </div>
// // }
//
// // import ReactDOM from 'react-dom'
// //
// // export const VideoHeader = (props: {videoName: string}) => {
// //     return <div>
// //         😀 {props.videoName}
// //     </div>
// // }
// // export const VideoContent = (props: {videoContent: string}) => {
// //     return <div>
// //         📼 <a href={props.videoContent}>{props.videoContent}</a>
// //     </div>
// // }
// // export const VideoDescription = (props: {videoDescription: string}) => {
// //     return <div>
// //         📑 {props.videoDescription}
// //     </div>
// // }
// //
// // export const YoutubeVideo = (props: any) => {
// //     return <div>
// //         <VideoHeader title={VideoHeader} />
// //         <VideoContent link={VideoContent} />
// //         <VideoDescription description={VideoDescription} />
// //     </div>
// // }
// //
// // export const App = () => {
// //     const video = {
// //         title: 'Samurai way',
// //         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
// //         description: 'Best free react-course'
// //     }
// //
// //     return <YoutubeVideo video={video} />
// // }
// //
// // ReactDOM.render(<App />,
// //     document.getElementById('root')
// // );
//
// // import ReactDOM from 'react-dom'
// //
// // const CrazyButton = (props: any) => {
// //
// //     const style = {
// //         color: props.fontColor,
// //         backgroundColor: props.bgColor
// //     }
// //
// //     return <button style={style}>
// //         {props.title}
// //     </button>
// // }
// //
// // export const App = () => {
// //     return <div>
// //         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
// //         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
// //     </div>
// // }
// //
// // ReactDOM.render(<App/>,
// //     document.getElementById('root')
// // )
// //
// // import ReactDOM from 'react-dom'
// //
// // const Son = (props: any) => {
// //     return <div>
// //         I am son. My name is {props.name}
// //     </div>
// // }
// //
// //
// // const Father = (props: any) => {
// //     return <div>
// //         I am father. My name is {props.name}
// //         <Son name={props.sonName} />
// //     </div>
// // }
// //
// // const Granny = (props: any) => {
// //     return <div>
// //         I am granny. My name is {props.name}
// //         <Father name={props.fatherName} sonName={props.sonName} />
// //     </div>
// // }
// //
// // export const App = () => {
// //     return <div>
// //         <Granny fatherName={'Бабуля'} sonName={'Батя'} name={'Сын'}/>
// //     </div>
// // }
// //
// // ReactDOM.render(<App/>,
// //     document.getElementById('root')
// // )


/*
type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}
const Page: React.FC<PagePropsType> = (props) => {
    return <User a={props.age} n={props.name} />
}
type UserPropsType = {
    a: number
    n: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}*/
//
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: Date
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             {props.mainArticle.date}
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }

// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserMoney: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }