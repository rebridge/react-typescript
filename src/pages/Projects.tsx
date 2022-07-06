import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import {Project} from '../components/Project';

export class Projects extends Component {
    render() {
        return (
            <Container>
                <div className="inner cover">
                    <h1 className='cover-heading'>Projects</h1>
                    <p className='lead'>These projects are hosted on my personal Github page</p>
                    <Project
                        link="https://github.com/rebridge/react-personal"
                        name="rebridge.net"
                        desc="This repo holds the source code for this webpage."
                    />
                    <Project
                        link="https://github.com/rebridge/spotify_project"
                        name="Spotify Playlist Maker"
                        desc="This project builds a new playlist based on a Spotify user's recent listening habits.
                              This was my self-taught introduction into Python programming and interacting with Web APIs"
                    />
                </div>
            </Container>
        )
    }
}

export default Projects