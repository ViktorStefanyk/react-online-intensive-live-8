// Core
import React, { Component } from 'react';

// Instruments
import avatar from '../../theme/assets/lisa.png';
import Styles from './styles.module.css';

export default class Composer extends Component {
    render() {
        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { `What's on your mind, lisa?` } />
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}