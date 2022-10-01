// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const statusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    pageDetails: [],
    pageStatus: statusConstants.loading,
  }

  componentDidMount() {
    this.covidVaccinationDataApiUrl()
  }

  covidVaccinationDataApiUrl = async () => {
    this.setState({pageStatus: statusConstants.loading})
    const options = {
      method: 'GET',
    }
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl, options)
    const data = await response.json()
    const updatedData = {
      lastSevenDaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    if (response.ok === true) {
      this.setState({
        pageDetails: updatedData,
        pageStatus: statusConstants.success,
      })
    } else {
      this.setState({pageStatus: statusConstants.failure})
    }
  }

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderLoading = () => (
    <div style={{textAlign: 'center'}} testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccess = () => {
    const {pageDetails} = this.state
    const {
      lastSevenDaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = pageDetails

    return (
      <div>
        <VaccinationCoverage itemDetails={lastSevenDaysVaccination} />
        <VaccinationByGender itemDetails={vaccinationByGender} />
        <VaccinationByAge itemDetails={vaccinationByAge} />
      </div>
    )
  }

  renderPage = () => {
    const {pageStatus} = this.state

    switch (pageStatus) {
      case statusConstants.success:
        return this.renderSuccess()
      case statusConstants.loading:
        return this.renderLoading()
      case statusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1>Co-WIN</h1>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        {this.renderPage()}
      </div>
    )
  }
}

export default CowinDashboard
