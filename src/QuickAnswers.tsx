import { useEffect, useRef, useState, type ToggleEvent } from 'react';
import { Icon } from './Icons';
import { initialQuestions, quickAnswers, type AnswerLink, type QuestionId } from './quickAnswersData';
import portrait from '../images/clement.png';
import styles from './QuickAnswers.module.css';

const panelId = 'quick-answers-panel';

export function QuickAnswers() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<QuestionId[]>([]);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const latestReply = useRef<HTMLElement>(null);
  const scrollArea = useRef<HTMLDivElement>(null);

  const lastQuestion = conversation.at(-1);
  const availableQuestions = (Object.keys(quickAnswers) as QuestionId[])
    .filter((id) => !conversation.includes(id));
  const recommendations = lastQuestion
    ? quickAnswers[lastQuestion].followUps.filter((id) => availableQuestions.includes(id))
    : initialQuestions;
  const suggestedQuestions = showAllQuestions || recommendations.length === 0
    ? availableQuestions
    : recommendations;
  const hasOtherQuestions = suggestedQuestions.length < availableQuestions.length;

  // Move keyboard focus to the new reply when its question button disappears.
  useEffect(() => {
    if (conversation.length === 0) return;
    latestReply.current?.focus({ preventScroll: true });
    latestReply.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }, [conversation.length]);

  function handleToggle(event: ToggleEvent<HTMLElement>) {
    const open = event.newState === 'open';
    setIsOpen(open);
    if (open) closeButton.current?.focus({ preventScroll: true });
  }

  function askQuestion(id: QuestionId) {
    setConversation((previous) => [...previous, id]);
    setShowAllQuestions(false);
  }

  function startOver() {
    setConversation([]);
    setShowAllQuestions(false);
    scrollArea.current?.scrollTo({ top: 0, behavior: 'instant' });
    closeButton.current?.focus({ preventScroll: true });
  }

  function followLink(link: AnswerLink) {
    // Leave fragment navigation to the browser and let visitors read the page.
    if (link.href.startsWith('#')) panel.current?.hidePopover();
  }

  return (
    <aside className={styles.widget} aria-label="Portfolio quick answers">
      <button
        type="button"
        className={styles.launcher}
        popoverTarget={panelId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span className={styles.launcherIcon}><Icon name={isOpen ? 'close' : 'message'} size={20} /></span>
        <span>{isOpen ? 'Close quick answers' : 'Ask about my work'}</span>
        {!isOpen && <span className={styles.launcherDot} aria-hidden="true" />}
      </button>

      <section
        ref={panel}
        id={panelId}
        className={styles.panel}
        popover="auto"
        role="dialog"
        aria-modal="false"
        aria-labelledby="quick-answers-title"
        aria-describedby="quick-answers-description"
        onToggle={handleToggle}
      >
        <header className={styles.header}>
          <span className={styles.avatar}><img src={portrait} width="40" height="40" alt="" /></span>
          <div className={styles.heading}>
            <h2 id="quick-answers-title">Clement’s quick answers</h2>
            <p id="quick-answers-description">A little help exploring my work.</p>
          </div>
          <button ref={closeButton} type="button" className={styles.close} popoverTarget={panelId} popoverTargetAction="hide" aria-label="Close quick answers">
            <Icon name="close" size={19} />
          </button>
        </header>

        <div ref={scrollArea} className={styles.scrollArea}>
          <div className={styles.conversation} role="log" aria-label="Quick answers conversation" aria-live="polite" aria-relevant="additions">
            <div className={styles.greeting}>
              <span className={styles.sender}>A QUICK HELLO <Icon name="spark" size={13} /></span>
              <p>Hi, I’m Clement. Want to know a little more about my experience, projects, or how to reach me?</p>
              <p className={styles.greetingHint}>Pick a question below. I’ll point you in the right direction.</p>
            </div>

            {conversation.map((id, index) => {
              const answer = quickAnswers[id];
              return (
                <div className={styles.exchange} key={id}>
                  <div className={styles.questionBubble}><span className={styles.srOnly}>You asked: </span>{answer.question}</div>
                  <article ref={index === conversation.length - 1 ? latestReply : undefined} className={styles.answer} tabIndex={-1} aria-label={`Answer: ${answer.question}`}>
                    <span className={styles.sender}>CLEMENT</span>
                    {answer.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <div className={styles.answerLinks}>
                      {answer.links.map((link) => <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} onClick={() => followLink(link)}>
                        <Icon name={link.icon} size={15} /><span>{link.label}</span>{link.external && <><Icon name="arrow" size={12} /><span className={styles.srOnly}> (opens in a new tab)</span></>}
                      </a>)}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {availableQuestions.length > 0 ? (
            <div className={styles.suggestions}>
              <p className={styles.suggestionsLabel}>{conversation.length === 0 ? 'WHERE WOULD YOU LIKE TO START?' : 'WHAT ELSE WOULD YOU LIKE TO KNOW?'}</p>
              <div className={styles.questionList} aria-label="Suggested questions">
                {suggestedQuestions.map((id) => <button key={id} type="button" onClick={() => askQuestion(id)}><Icon name={quickAnswers[id].icon} size={16} /><span>{quickAnswers[id].question}</span><Icon name="arrow" size={13} /></button>)}
              </div>
              {!showAllQuestions && hasOtherQuestions && <button className={styles.otherQuestions} type="button" onClick={() => setShowAllQuestions(true)}>Other questions <span aria-hidden="true">+</span></button>}
            </div>
          ) : <p className={styles.finished}>That’s the quick tour. You can start over, or get in touch through the links above.</p>}
        </div>

        <footer className={styles.footer}>
          <span><span className={styles.footerDot} /> Prewritten answers</span>
          <button type="button" onClick={startOver} disabled={conversation.length === 0 && !showAllQuestions}><Icon name="reset" size={13} /> Start over</button>
        </footer>
      </section>
    </aside>
  );
}
