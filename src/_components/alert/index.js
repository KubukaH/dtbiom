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
    //Clean Up function
    return () => {
      subscription.unsubscribe();
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
        <Dialog 
          as="div"
          onClose={removeAlert}
        >
          <div className="fixed top-12 right-16">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className={joinClassNames(cssClasses(alert),
                    "max-w-[512px] h-full p-5 transform text-justify overflow-hidden rounded-xl shadow-xl transition-all"
                    )}
                >
                  <span dangerouslySetInnerHTML={{ __html: alert.message }} />
  
                  <button
                    type="button"
                    className="alert-close"
                    onClick={() => removeAlert(alert)}
                  >
                      <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
      ))}
      </>
  );
}

AlertPopper.propTypes = propTypes;
AlertPopper.defaultProps = defaultProps;

export { AlertPopper };