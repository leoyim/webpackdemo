import _ from 'lodash';
import './style.css';
import Icon from './logo.png'
import Data from './data.xml'

function component() {
    var element = document.createElement('div');
    //Lodash 现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	//将图片添加到现有的div
	var icon = new Image();
	icon.src = Icon;
	element.appendChild(icon);

	//数据
	console.log(Data);
	
    return element;
}

document.body.appendChild(component());
