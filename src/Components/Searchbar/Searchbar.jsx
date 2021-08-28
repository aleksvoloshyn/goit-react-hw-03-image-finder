import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  onChangeInput = e => {
    this.setState({ searchRequest: e.currentTarget.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    if (!this.state.searchRequest) {
      toast.error('Ввдите данные в строку поиска');
      return;
    }
    this.setState({ searchRequest: '' });
    toast.success('Searching, my lord ;)');

    this.props.onSubmit(this.state.searchRequest);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.onSearchSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            value={this.state.searchRequest}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
