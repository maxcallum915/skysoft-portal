import { Tab } from "@headlessui/react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Box from "../components/Box";
import Button from "../components/Button";
import Chip from "../components/Chip";
import { useState } from "react";

// Temporary Data
import {
  companiesData,
  brandsData,
  categoriesData,
  statusesData,
  stagesData,
  healthData,
  projectTypeData,
} from "../data.js";

const styles = {
  tabs: {
    tabList: `mb-3 flex gap-2 rounded-xl bg-white p-1.5 border border-slate-200`,
    tab: `rounded-lg py-2 px-3 font-medium ring-white ring-opacity-20 ring-offset-2 ring-offset-blue-300 focus:outline-none focus:ring-2`,
    tabDefault: `text-slate-700 hover:bg-slate-100 hover:text-slate-900`,
    tabSelected: `bg-gradient-to-l from-primary to-secondary text-white shadow-md`,
  },
  chips: {
    wrapper: `flex flex-wrap gap-4`,
    chip: `flex items-center gap-2.5 rounded-lg border border-slate-200 p-3`,
    logo: `h-14 w-14 shrink-0 rounded-lg bg-slate-50 object-contain p-1 ring-1 ring-slate-100`,
    title: `text-lg font-semibold capitalize text-slate-900`,
    subtitle: `text-xs font-medium capitalize text-slate-400`,
    actionWrapper: `relative ml-6 flex items-center gap-2`,
    action: `h-6 w-6 rounded-md text-slate-900 hover:text-secondary focus:text-secondary focus:outline-none`,
  },
};
const { tabs, chips } = styles;

const Settings = () => {
  const [stages, setStages] = useState(stagesData);
  const [statuses, setStatuses] = useState(statusesData);
  const [categories, setCategories] = useState(categoriesData);
  const [brands, setBrands] = useState(brandsData);
  const [companies, setCompanies] = useState(companiesData);
  const [health, setHealth] = useState(healthData);
  const [projectType, setProjectType] = useState(projectTypeData);

  const handleDelete = (id, array, setter) => {
    const updatedArray = array.filter((v) => v.id !== id);
    setter(updatedArray);
  };

  return (
    <>
      <Tab.Group>
        <Tab.List className={`${tabs.tabList}`}>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Companies
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Brands
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Categories
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Statuses
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Stages
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Project Health
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Project Types
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new company</Button>
              <div className={chips.wrapper}>
                {companies.map((company) => {
                  return (
                    <div className={chips.chip} key={company.id}>
                      <img
                        src={company.icon}
                        alt={company.title}
                        className={chips.logo}
                      />
                      <div>
                        <h5 className={chips.title}>{company.title}</h5>
                        <h6 className={chips.subtitle}>
                          created on {company.date}
                        </h6>
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(company.id, companies, setCompanies);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new brand</Button>
              <div className={chips.wrapper}>
                {brands.map((brand) => {
                  return (
                    <div className={chips.chip} key={brand.id}>
                      <img
                        src={brand.icon}
                        alt={brand.title}
                        className={chips.logo}
                      />
                      <div>
                        <h5 className={chips.title}>{brand.title}</h5>
                        <h6 className={chips.subtitle}>{brand.company}</h6>
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(brand.id, brands, setBrands);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new category</Button>
              <div className={chips.wrapper}>
                {categories.map((category) => {
                  return (
                    <div className={chips.chip} key={category.id}>
                      <img
                        src={category.icon}
                        alt={category.title}
                        className={chips.logo}
                      />
                      <div>
                        <h5 className={chips.title}>{category.title}</h5>
                        <h6 className={chips.subtitle}>
                          created on 01-01-2023
                        </h6>
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(
                              category.id,
                              categories,
                              setCategories
                            );
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new status</Button>
              <div className={chips.wrapper}>
                {statuses.map((status) => {
                  return (
                    <div className={chips.chip} key={status.id}>
                      <div>
                        <h5 className={chips.title}>{status.title}</h5>
                        <Chip
                          label={status.title}
                          variant={status.className}
                          outlined={status.outlineVariant}
                        />
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(status.id, statuses, setStatuses);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new stage</Button>
              <div className={chips.wrapper}>
                {stages.map((stage) => {
                  return (
                    <div className={chips.chip} key={stage.id}>
                      <div>
                        <h5 className={chips.title}>{stage.title}</h5>
                        <Chip
                          label={stage.title}
                          variant={stage.className}
                          outlined={stage.outlineVariant}
                        />
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(stage.id, stages, setStages);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new status</Button>
              <div className={chips.wrapper}>
                {health.map((healthStatus) => {
                  return (
                    <div className={chips.chip} key={healthStatus.id}>
                      <div>
                        <h5 className={chips.title}>{healthStatus.title}</h5>
                        <Chip
                          label={healthStatus.title}
                          variant={healthStatus.className}
                          outlined={healthStatus.outlineVariant}
                        />
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(healthStatus.id, health, setHealth);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <Button classes="ml-auto mb-5">Add a new type</Button>
              <div className={chips.wrapper}>
                {projectType.map((type) => {
                  return (
                    <div className={chips.chip} key={type.id}>
                      <img
                        src={type.icon}
                        alt={type.title}
                        className={chips.logo}
                      />
                      <div>
                        <h5 className={chips.title}>{type.title}</h5>
                      </div>
                      <div className={chips.actionWrapper}>
                        <button className={chips.action}>
                          <HiOutlinePencil className="h-full w-full" />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(type.id, projectType, setProjectType);
                          }}
                          className={chips.action}
                        >
                          <HiOutlineTrash className="h-full w-full" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Settings;
