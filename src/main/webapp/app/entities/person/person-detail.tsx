import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './person.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPersonDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PersonDetail = (props: IPersonDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { personEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="personDetailsHeading">
          <Translate contentKey="myrestserviceApp.person.detail.title">Person</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{personEntity.id}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="myrestserviceApp.person.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{personEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="myrestserviceApp.person.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{personEntity.lastName}</dd>
          <dt>
            <span id="dateOfBirth">
              <Translate contentKey="myrestserviceApp.person.dateOfBirth">Date Of Birth</Translate>
            </span>
          </dt>
          <dd>{personEntity.dateOfBirth ? <TextFormat value={personEntity.dateOfBirth} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="myrestserviceApp.person.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{personEntity.phoneNumber}</dd>
        </dl>
        <Button tag={Link} to="/person" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/person/${personEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ person }: IRootState) => ({
  personEntity: person.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);
