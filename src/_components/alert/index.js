import { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from '@headlessui/react';

import { AlertType, alertService } from "./service";
import { joinClassNames } from "../extras/cn_join";

const propTypes = { id: PropTypes.string, fade: PropTypes.bool };

const defaultProps = { id: "alert-default", fade: true }

function AlertPopper({ id, fade }) {
  const [alerts, setAlerts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //Subscribe to new alerts
    const subscription = alertService.onAlert(id).subscribe(
      alert => {
        if (!alert.message) {
          setAlerts(alerts => {
            // filter out alerts without 'keepAfterRouteChange' flag
            const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);

            // remove 'keepAfterRouteChange' flag on the rest
            filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
            return filteredAlerts;
          })
        } else {
          // Open Alert
          setIsOpen(true);

          // add alert to array
          setAlerts(alerts => ([...alerts, alert]));

          // auto close alert if required
          if (alert.autoClose) {
            setTimeout(() => removeAlert(alert), 6000);
          }
        }
      }
    );

    function historyUnlisten() {
      if (document.location.href.endsWith('/')) return;
      alertService.clear(id);
    }

    //Clean Up function
    return () => {
      subscription.unsubscribe();
      historyUnlisten();
    };
  },[]);

  function removeAlert(alert) {
    if(fade) {
      const alertWithFade = { ...alert, fade: true };
      setAlerts(alerts => alerts.map(x => x === alert ? alertWithFade : x));

      setTimeout(() => {
        setAlerts(alerts => alerts.filter(x => x !== alertWithFade))
      }, 6000);
    } else {
      setAlerts(alerts => alerts.filter(x => x !== alert));
    }
    setIsOpen(false);
  }

  function cssClasses(alert) {
    if (!alert) return;

    const classes = ['alert-dismissible'];
    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

  if (!alerts.length) return null;

  return (
    <>
      {alerts.map((alert, index) => (
        <Transition appear show={isOpen} as={Fragment} key={index}>
        <aside
          className={joinClassNames(cssClasses(alert),
            "fixed top-8 end-56 z-50  px-5 py-3 flex items-center justify-center gap-4 rounded-lg shadow-xl"
            )}
        >
          <span dangerouslySetInnerHTML={{ __html: alert.message }} className="text-sm font-medium hover:opacity-75" />
          <span />

          <button 
            className="rounded bg-white/20 p-1 hover:bg-white/10"
            onClick={() => removeAlert(alert)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
        </Transition>
      ))}
      </>
  );
}

AlertPopper.propTypes = propTypes;
AlertPopper.defaultProps = defaultProps;

export { AlertPopper };
