import React, { Component } from 'react';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      }, () => this.props.getURL(this.state.imagePreviewUrl));
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img style={{ width: 300 }} src={imagePreviewUrl} />);
    }

    return (
      <div>
        <input type="file" onChange={this._handleImageChange} />
        {imagePreview}
      </div>
    )
  }

}