import React from 'react';

class PageSidebar extends React.Component {
	constructor() {
		super();
		
		this.renderInventory 	= this.renderInventory.bind(this);
		this.handleChange 		= this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const fish = this.props.fishes[key];
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value
		}
		this.props.updateFish(key, updatedFish);
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input value={fish.name} name="name" type="text" placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
				<input value={fish.price} name="price" type="text" placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)} />
				<select value={fish.status} name="status" onChange={(e) => this.handleChange(e, key)} >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea value={fish.desc} name="desc"  type="text" placeholder="Fish Description" onChange={(e) => this.handleChange(e, key)} ></textarea>
				<input value={fish.image} name="image" type="text" placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)} />
				<button onClick={() => this.props.removeFish(key)}>Remove Item</button>
			</div>
		)
	}

	render() {
		return (
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
                        <a href="#" className="remove">
                            <i className="icon-close"></i>
                        </a>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <a href="#" className="btn submit">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                    {/* END RESPONSIVE QUICK SEARCH FORM */}
                </li>
                <li className="nav-item start active open">
                    <a href="#" className="nav-link nav-toggle">
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
                    <a href="#" className="nav-link nav-toggle">
                        <i className="icon-puzzle"></i>
                        <span className="title">Transactions</span>
                        <span className="arrow"></span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link nav-toggle">
                        <i className="icon-settings"></i>
                        <span className="title">Reports</span>
                        <span className="arrow"></span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link nav-toggle">
                        <i className="icon-bulb"></i>
                        <span className="title">Bills</span>
                        <span className="arrow"></span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link nav-toggle">
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
		)
	}
}

PageSidebar.propTypes = {
};

export default PageSidebar;