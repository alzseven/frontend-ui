import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Progress, Button } from 'reactstrap';
import s from './StationList.module.scss';
import { withCookies } from 'react-cookie';

class StationItem extends Component {
  addToCookie(id) {
    if (this.props.cookies.get('favorites') === undefined) {
      this.props.cookies.set('favorites', JSON.stringify(new Array()), {
        path: '/',
      });
    }
    let favs = this.props.cookies.get('favorites');
    const index = favs.indexOf(id);
    if (index === -1) {
      favs.push(id);
      this.props.cookies.set('favorites', JSON.stringify(favs), {
        path: '/',
      });
    }
  }

  removeFromCookie(id) {
    if (this.props.cookies.get('favorites') === undefined) {
      this.props.cookies.set('favorites', JSON.stringify(new Array()), {
        path: '/',
      });
    }
    let favs = this.props.cookies.get('favorites');
    const index = favs.indexOf(id);
    if (index > -1) {
      favs.splice(index, 1);
      this.props.cookies.set('favorites', JSON.stringify(favs), {
        path: '/',
      });
    }
  }

  render() {
    const { id, thumbnail, name, locationDesc, overallSpaces, vacancy } =
      this.props;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <img className={s.image} src={thumbnail} alt="" height="50" />
        </td>
        <td>
          {name}
          {/* {label && (
          <div>
            <Badge color={label.colorClass}>
              {label.text}
            </Badge>
          </div>
        )} */}
        </td>
        <td>
          <p className="mb-0">
            <small>
              위치 :
              <span className="text-muted fw-semi-bold">
                &nbsp; {locationDesc}
              </span>
            </small>
          </p>
          <p>
            <small>
              지도로 위치 확인 :
              <span className="text-muted fw-semi-bold">
                {/* TODO:Fix */}
                &nbsp; {'지도보기'}
              </span>
            </small>
          </p>
        </td>
        <td>
          주차장 자리수 : 총 {/* 주차장 빈자리수 : 총  */}
          <span className="text-muted fw-semi-bold">{overallSpaces}</span> 개
        </td>
        <td className="text-muted">
          <Button
            outline
            className={`${s.button} ${s.favorite} ${
              this.props.cookies.get('favorites') === undefined
                ? s.nonactive
                : this.props.cookies.get('favorites').indexOf(id) <= -1
                ? s.nonactive
                : ''
            }`}
            onClick={() => {
              this.removeFromCookie(id);
            }}
          ></Button>
          <Button
            outline
            className={`${s.button} ${s.nonfavorite} ${
              this.props.cookies.get('favorites') === undefined
                ? ''
                : this.props.cookies.get('favorites').indexOf(id) > -1
                ? s.nonactive
                : ''
            }`}
            onClick={() => {
              this.addToCookie(id);
            }}
          ></Button>
        </td>
        <td className="width-150">
          {/* TODO:Fix */}
          <Progress
            color={
              1 - vacancy / overallSpaces > 0.8
                ? 'danger'
                : 1 - vacancy / overallSpaces > 0.6
                ? 'danger'
                : 1 - vacancy / overallSpaces > 0.4
                ? 'primary'
                : 'success'
            }
            value={(1 - vacancy / overallSpaces) * 100}
            className="progress-sm mb-xs"
          />
          <NavLink
            to={`/app/tables/vacancy?id=${id}`}
            exact
            target={this.props.target}
          >
            <Button outline className={s.button}>
              주차장 빈자리 확인
            </Button>
          </NavLink>
        </td>
      </tr>
    );
  }
}

export default withCookies(StationItem);
