import React, { Component } from 'react';
import {API_KEY, Shared_secret, APIrootURL} from '../../apiInfo';
// import convToJson from 'xml-js';
import '../../responcive.scss';
// const conv = require('xml-js');
const proxy = 'http://cors-anywhere.herokuapp.com/';


class StationsList extends Component{

    constructor(props){
        super(props);

        this.getStation = this.getStation.bind(this);
        // this.auth = this.auth.bind(this);
        this.getTopSongs = this.getTopSongs.bind(this);
        this.getStream = this.getStream.bind(this);
    }

    async getStation (){
        const request = await fetch(`${proxy}api.dar.fm/playlist.php?q=@callsign%20Chill*&callback=json`);
        const data = await request.json();
        return data
    }
    async getTopSongs (){
        const request = await fetch(`${proxy}http://api.dar.fm/playlist.php?q=U2&callback=json`);
        console.log(request);
        const data = await request.json();
        console.log(data);

    }
    // async auth() {
    //     console.log(API_KEY);
    //     // const auth = fetch(`http://www.last.fm/api/auth/?api_key=${this.props.API_KEY}`);
    // }
    async getStream (station){//byid
        const request = await fetch(`${proxy}http://api.dar.fm/uberstationurl.php?station_id=${station}&partner_token=${API_KEY}&callback=json`);
        const data = await request.json();
        console.log(data.result[0].url);
        return data.result[0].url;
    }
    componentDidMount() {

        // console.log('calling getTopSongs()');
        // this.getTopSongs();
        // console.log('calling getStation()');

        // api.dar.fm/uberstationurl.php?callsign=KKFN&partner_token=123456789
        // const link = this.getStream('147628');
        // console.log(link.result[0].url);//getStation());
        // return link.result[0].url;
    }
    //this.getStream('147628')
    render() {
        return(
            <div className="stations_list">
                <audio src={'http://stream.dar.fm/147628'} controls></audio>
            </div>
        )
    }
}

export default StationsList;