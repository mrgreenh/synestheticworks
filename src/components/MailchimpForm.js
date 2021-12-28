import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeForm extends React.Component {
  state = {
    email: '',
    message: '',
    showPlanB: false,
    loading: false
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({showPlanB: false});
    setTimeout(() => {
      this.setState({showPlanB: true, loading: false});
    }, 2000);
    this.setState({loading: true, message: ''})
    const result = await addToMailchimp(this.state.email);
    this.setState({ message: result.msg, loading: false });
  };

  render() {
    return (
      <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={this.handleSubmit}>
        {!this.state.loading && <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message}} />}
        {this.state.loading && <div className="message">Loading...</div>}
        {!!this.state.showPlanB 
          && !this.state.message.length 
          && <div className="message">
              Seems like something is not working. Try subscribe from the <a href="http://eepurl.com/hQ3rAn" target="_blank">
                Mailchimp page directly</a>. Sorryyy :'(
            </div>}
        <div className="form-row">
          <label>
            <span className="screen-reader-text">Keep up with rare updates:</span>
            <input
              className="subscribe-email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <button className="button" type="submit">
          Subscribe
        </button>
      </form>
    );
  }
}