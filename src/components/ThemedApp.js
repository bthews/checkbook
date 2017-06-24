import React from 'react';
import { Switch, Route } from 'react-router-dom'
import StorePicker from './StorePicker';
import App from '../components/App'
import NotFound from '../components/NotFound'
import PageSidebar from './PageSidebar';
import PageTopMenu from './PageTopMenu';

class ThemedApp extends React.Component {

	render() {
		return (
			<div className="page-wrapper">
        {/* BEGIN HEADER */}
        <div className="page-header navbar navbar-fixed-top">
          {/* BEGIN HEADER INNER */}
          <div className="page-header-inner ">
              {/* BEGIN LOGO */}
              <div className="page-logo">
                  <a href="index.html">
                      <img src="/assets/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
                  <div className="menu-toggler sidebar-toggler">
                      <span></span>
                  </div>
              </div>
              {/* END LOGO */}
              {/* BEGIN RESPONSIVE MENU TOGGLER */}
              <a href="#" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                  <span></span>
              </a>
              {/* END RESPONSIVE MENU TOGGLER */}
              {/* BEGIN TOP NAVIGATION MENU */}
              <PageTopMenu />
              {/* END TOP NAVIGATION MENU */}
          </div>
          {/* END HEADER INNER */}
        </div>
        {/* END HEADER */}
        {/* BEGIN HEADER & CONTENT DIVIDER */}
        <div className="clearfix"> </div>
        {/* END HEADER & CONTENT DIVIDER */}
            {/* BEGIN CONTAINER */}
            <div className="page-container">
                {/* BEGIN SIDEBAR */}
                <PageSidebar />
                {/* END SIDEBAR */}
                {/* BEGIN CONTENT */}
                <div className="page-content-wrapper">
                    {/* BEGIN CONTENT BODY */}
                    <div className="page-content">
                        {/* BEGIN PAGE HEADER*/}
                        {/* BEGIN THEME PANEL */}
                        <div className="theme-panel hidden-xs hidden-sm">
                            <div className="toggler"> </div>
                            <div className="toggler-close"> </div>
                            
                        </div>
                        {/* END THEME PANEL */}
                        {/* BEGIN PAGE BAR */}
                        <div className="page-bar">
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                    <i className="fa fa-circle"></i>
                                </li>
                                <li>
                                    <a href="#">Blank Page</a>
                                    <i className="fa fa-circle"></i>
                                </li>
                                <li>
                                    <span>Page Layouts</span>
                                </li>
                            </ul>
                            <div className="page-toolbar">
                                <div className="btn-group pull-right">
                                    <button type="button" className="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown"> Actions
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li>
                                            <a href="#">
                                                <i className="icon-bell"></i> Action</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-shield"></i> Another action</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-user"></i> Something else here</a>
                                        </li>
                                        <li className="divider"> </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-bag"></i> Separated link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* END PAGE BAR */}
                        {/* BEGIN PAGE TITLE*/}
                        <h1 className="page-title"> Blank Page Layout
                            <small>blank page layout</small>
                        </h1>
                        {/* END PAGE TITLE*/}
                        {/* END PAGE HEADER*/}
                        <div className="note note-info">
                            <p> A black page template with a minimal dependency assets to use as a base for any custom page you create </p>
                        </div>

                        <Switch>
                          <Route exact path='/' component={StorePicker}/>
                          <Route path='/store/:storeId' component={App}/>
                          <Route component={NotFound}/>
                        </Switch>

                        
                    </div>
                    {/* END CONTENT BODY */}
                </div>
                {/* END CONTENT */}
                
            </div>
            {/* END CONTAINER */}
            {/* BEGIN FOOTER */}
            <div className="page-footer">
                <div className="page-footer-inner"> 2017 &copy; LiveCheckbook.com &nbsp;|&nbsp;
                    <a href="http://livecheckbook.com/premium" title="More features for your checkbook" target="_blank">Upgrade to premium membership</a>
                </div>
                <div className="scroll-to-top">
                    <i className="icon-arrow-up"></i>
                </div>
            </div>
            {/* END FOOTER */}
        </div>
			
		)
	}
}

ThemedApp.contextTypes = {
	router: React.PropTypes.object
}

export default ThemedApp;