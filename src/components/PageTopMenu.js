import React from 'react';

class PageTopMenu extends React.Component {
	
	render() {
    var style = {
      height: 250
    };
    
		return (
			  <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
            {/* BEGIN NOTIFICATION DROPDOWN */}
            {/* DOC: Apply "dropdown-dark" className after "dropdown-extended" to change the dropdown styte */}
            {/* DOC: Apply "dropdown-hoverable" className after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode */}
            {/* DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle className */}
            <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
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
                                <a href="#">
                                    <span className="time">just now</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-success">
                                            <i className="fa fa-plus"></i>
                                        </span> New user registered. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">3 mins</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-danger">
                                            <i className="fa fa-bolt"></i>
                                        </span> Server #12 overloaded. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">10 mins</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-warning">
                                            <i className="fa fa-bell-o"></i>
                                        </span> Server #2 not responding. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">14 hrs</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-info">
                                            <i className="fa fa-bullhorn"></i>
                                        </span> Application error. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">2 days</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-danger">
                                            <i className="fa fa-bolt"></i>
                                        </span> Database overloaded 68%. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">3 days</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-danger">
                                            <i className="fa fa-bolt"></i>
                                        </span> A user IP blocked. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">4 days</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-warning">
                                            <i className="fa fa-bell-o"></i>
                                        </span> Storage Server #4 not responding dfdfdfd. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="time">5 days</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-info">
                                            <i className="fa fa-bullhorn"></i>
                                        </span> System Error. </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
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
                <a href="#" className="dropdown-toggle">
                    <i className="icon-logout"></i>
                </a>
            </li>
            {/* END QUICK SIDEBAR TOGGLER */}
          </ul>
      </div>
		)
	}
}

PageTopMenu.propTypes = {
};

export default PageTopMenu;