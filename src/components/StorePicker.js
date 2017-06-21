import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}


	goToStore(event) {
		event.preventDefault();
		console.log("You changed the URL");
		//first grab the text from the box
		const storeId = this.storeInput.value;
		//second, move from / to /store/storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		var style = {
      height: 250
    };

		return (
			<div className="page-wrapper">
            {/* BEGIN HEADER */}
            <div className="page-header navbar navbar-fixed-top">
                {/* BEGIN HEADER INNER */}
                <div className="page-header-inner ">
                    {/* BEGIN LOGO */}
                    <div className="page-logo">
                        <a href="index.html">
                            <img src="./assets/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
                        <div className="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    </div>
                    {/* END LOGO */}
                    {/* BEGIN RESPONSIVE MENU TOGGLER */}
                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                    {/* END RESPONSIVE MENU TOGGLER */}
                    {/* BEGIN TOP NAVIGATION MENU */}
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            {/* BEGIN NOTIFICATION DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" className after "dropdown-extended" to change the dropdown styte */}
                            {/* DOC: Apply "dropdown-hoverable" className after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode */}
                            {/* DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle className */}
                            <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i className="icon-bell"></i>
                                    <span className="badge badge-default"> 7 </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="external">
                                        <h3>
                                            <span className="bold">12 pending</span> notifications</h3>
                                        <a href="page_user_profile_1.html">view all</a>
                                    </li>
                                    <li>
                                        <ul className="dropdown-menu-list scroller" style={style} data-handle-color="#637283">
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">just now</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-success">
                                                            <i className="fa fa-plus"></i>
                                                        </span> New user registered. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">3 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Server #12 overloaded. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">10 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Server #2 not responding. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">14 hrs</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> Application error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">2 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Database overloaded 68%. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">3 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> A user IP blocked. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">4 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Storage Server #4 not responding dfdfdfd. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">5 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> System Error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">9 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Storage server failed. </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* END NOTIFICATION DROPDOWN */}
                            {/* BEGIN USER LOGIN DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-user">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img alt="" className="img-circle" src="../assets/layouts/layout/img/avatar3_small.jpg" />
                                    <span className="username username-hide-on-mobile"> Nick </span>
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="page_user_profile_1.html">
                                            <i className="icon-user"></i> My Profile </a>
                                    </li>
                                    <li>
                                        <a href="app_calendar.html">
                                            <i className="icon-calendar"></i> My Calendar </a>
                                    </li>
                                    <li>
                                        <a href="app_inbox.html">
                                            <i className="icon-envelope-open"></i> My Inbox
                                            <span className="badge badge-danger"> 3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app_todo.html">
                                            <i className="icon-rocket"></i> My Tasks
                                            <span className="badge badge-success"> 7 </span>
                                        </a>
                                    </li>
                                    <li className="divider"> </li>
                                    <li>
                                        <a href="page_user_lock_1.html">
                                            <i className="icon-lock"></i> Lock Screen </a>
                                    </li>
                                    <li>
                                        <a href="page_user_login_1.html">
                                            <i className="icon-key"></i> Log Out </a>
                                    </li>
                                </ul>
                            </li>
                            {/* END USER LOGIN DROPDOWN */}
                            {/* BEGIN QUICK SIDEBAR TOGGLER */}
                            {/* DOC: Apply "dropdown-dark" className after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-quick-sidebar-toggler">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <i className="icon-logout"></i>
                                </a>
                            </li>
                            {/* END QUICK SIDEBAR TOGGLER */}
                        </ul>
                    </div>
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
                <div className="page-sidebar-wrapper">
                    {/* BEGIN SIDEBAR */}
                    {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
                    {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
                    <div className="page-sidebar navbar-collapse collapse">
                        {/* BEGIN SIDEBAR MENU */}
                        {/* DOC: Apply "page-sidebar-menu-light" className right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
                        {/* DOC: Apply "page-sidebar-menu-hover-submenu" className right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
                        {/* DOC: Apply "page-sidebar-menu-closed" className right after "page-sidebar-menu" to collapse("page-sidebar-closed" className must be applied to the body element) the sidebar sub menu mode */}
                        {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
                        {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
                        {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
                        <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                            {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
                            {/* BEGIN SIDEBAR TOGGLER BUTTON */}
                            <li className="sidebar-toggler-wrapper hide">
                                <div className="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            {/* END SIDEBAR TOGGLER BUTTON */}
                            {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
                            <li className="sidebar-search-wrapper">
                                {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                                {/* DOC: Apply "sidebar-search-bordered" className the below search form to have bordered search box */}
                                {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" className the below search form to have bordered & solid search box */}
                                <form className="sidebar-search  " action="page_general_search_3.html" method="POST">
                                    <a href="javascript:;" className="remove">
                                        <i className="icon-close"></i>
                                    </a>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..."/>
                                        <span className="input-group-btn">
                                            <a href="javascript:;" className="btn submit">
                                                <i className="icon-magnifier"></i>
                                            </a>
                                        </span>
                                    </div>
                                </form>
                                {/* END RESPONSIVE QUICK SEARCH FORM */}
                            </li>
                            <li className="nav-item start active open">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-home"></i>
                                    <span className="title">Accounts</span>
                                    <span className="selected"></span>
                                    <span className="arrow open"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item start active open">
                                        <a href="index.html" className="nav-link ">
                                            <span className="title">USAA Checking</span>
                                            <span className="selected"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item start ">
                                        <a href="dashboard_2.html" className="nav-link ">
                                            <span className="title">Suntrust Savings</span>
                                        </a>
                                    </li>
                                    <li className="nav-item start ">
                                        <a href="dashboard_3.html" className="nav-link ">
                                            <span className="title">Fidelity Investments (IRA)</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="index.html" className="nav-link nav-toggle">
                                    <i className="icon-diamond"></i>
                                    <span className="title">Payees</span>
                                    <span className="arrow"></span>
                                </a>
                                
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-puzzle"></i>
                                    <span className="title">Transactions</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-settings"></i>
                                    <span className="title">Reports</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-bulb"></i>
                                    <span className="title">Bills</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-briefcase"></i>
                                    <span className="title">Budgets</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            
                        </ul>
                        {/* END SIDEBAR MENU */}
                        {/* END SIDEBAR MENU */}
                    </div>
                    {/* END SIDEBAR */}
                </div>
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

                        <form className="store-selector" onSubmit={this.goToStore}>
													<h2>Please Enter a Store</h2>
													<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
													<button type="submit">Visit Store</button>
												</form>
                    </div>
                    {/* END CONTENT BODY */}
                </div>
                {/* END CONTENT */}
                
            </div>
            {/* END CONTAINER */}
            {/* BEGIN FOOTER */}
            <div className="page-footer">
                <div className="page-footer-inner"> 2017 &copy; LiveCheckbook.com &nbsp;|&nbsp;
                    <a href="http://livecheckbook.com/premium" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Upgrade to premium membership</a>
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

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;