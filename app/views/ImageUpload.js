import React, {Component} from 'react'

class ImageUpload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  handleImageChange (e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
    console.log(file)
    console.log(imagePreviewUrl)
  }

  render () {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null

    var imagestyle = {
      'max-width': '200px',
      'max-height': '200px'
    }

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={imagestyle} />)
    } else {
      $imagePreview = (<img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAvGAAAAJDk4ZWM2ZTM4LTk5NGQtNGI1Yy1iN2ZiLTdhZDRlOTE2YmM5MA.jpg' style={imagestyle} />)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.handleImageChange} />
        </form>
        {$imagePreview}
      </div>
    )
  }
}
export default ImageUpload
