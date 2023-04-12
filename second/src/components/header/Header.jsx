import './header.css'


export default function Headers(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className='headertitlesmall'>React & Node</span>
                <span className='headertitlelarge'>Blog</span>
            </div>
            <img className='headerImage' src='https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
        </div>
    )
}